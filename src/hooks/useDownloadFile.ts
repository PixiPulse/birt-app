import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import { useState } from "react";

export function useDownloadFile() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [uri, setUri] = useState<string>("");

  const callback = (downloadProgress: any) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    setDownloadProgress(progress);
  };

  const handleDownloadFile = async ({
    url,
    fileName,
  }: {
    url: string;
    fileName: string;
  }) => {
    const downloadResumable = await FileSystem.createDownloadResumable(
      url,
      FileSystem.documentDirectory + fileName,
      {},
      callback,
    );

    try {
      const { uri } = (await downloadResumable.downloadAsync()) as FileSystem.FileSystemDownloadResult;
      console.log(uri)
      setUri(uri);
      console.log("Finished downloading to ", uri);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  const handleDeleteFiles = async () => {
    const allDataKeys = await AsyncStorage.getAllKeys();
    console.log(allDataKeys);
    const allData = await AsyncStorage.multiGet(allDataKeys);
    try {
      for (let i = 0; i < allData.length; i++) {
        await FileSystem.deleteAsync(allData[i][1] as string);
      }
    } catch (error) {
      console.log(error);
    } finally {
      await AsyncStorage.clear();
      setIsDeleted(true);
    }
  };

  return {
    handleDownloadFile,
    downloadProgress,
    uri,
    handleDeleteFiles,
    isDeleted,
  };
}
