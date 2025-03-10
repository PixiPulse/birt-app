import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import { fonts } from '@/styles'
import { colors, fontSize } from '@/constants/token'
import Download from '@/constants/icons/download'
import { useDownloadFile } from '@/hooks/useDownloadFile'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Play from '@/constants/icons/play'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import * as FileSystem from 'expo-file-system'
import { usePlayerContext } from '@/contexts/PlayerContext'
import { ASSET_URL } from '@/lib/data'

export default function Card({ data }: { data: any }) {
	const [downloadedUri, setdownloadedUri] = useState('')
	const { setCurrentTrack, currentTrack } = usePlayerContext()
	const { handleDownloadFile, downloadProgress, uri } = useDownloadFile()

	const getData = async () => {
		const jsonValue = await AsyncStorage.getItem(`${data.id}`)
		const isDownloaded = await FileSystem.getInfoAsync(jsonValue || '')
		return isDownloaded.exists ? setdownloadedUri(jsonValue || '') : setdownloadedUri('')
	}

	const setData = async () => {
		await AsyncStorage.setItem(`${data.id}`, uri)
	}

	useEffect(() => {
		getData()
	}, [data])

	useEffect(() => {
		if (downloadProgress == 1) {
			setData()
			setdownloadedUri(uri)
		}
		console.log(downloadProgress)
	}, [downloadProgress, uri])

	const disabled = (downloadProgress > 0 && downloadProgress < 1) || currentTrack?.id === data.id

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			disabled={disabled}
			style={[styles.container, {...(disabled) && {backgroundColor: colors.muted}}]}
			onPress={() => {
				if (Platform.OS == 'android') {
					if (downloadedUri) {
						let item = { ...data, uri: '' }
						item.uri = downloadedUri
						setCurrentTrack(item)
					} else {
						if (downloadProgress > 0) return
						handleDownloadFile({
							url: `${ASSET_URL}${data.fileUrl}`,
							fileName: `${data?.place?.name}-${data?.language.name}.${data?.fileUrl.split('.').pop()}`,
						})
					}
				} else {
					let item = { ...data, uri: '' }
					item.uri = ASSET_URL + data.fileUrl
					setCurrentTrack(item)
				}
			}}
		>
			{/* left */}
			<View style={styles.leftContainer}>
				<Image style={styles.image} source={`${ASSET_URL}${data?.language?.imgUrl}`} />
				<Text style={[fonts.normal, { fontSize: fontSize.sm }]}>{data?.language?.name}</Text>
			</View>

			{/* right */}
			{Platform.OS == 'android' ? (
				<View>
					{downloadedUri ? (
						<View style={styles.button}>
							<Play fill={colors.primary} size="20" />
						</View>
					) : downloadProgress == 0 ? (
						<View style={styles.button}>
							<Download fill={colors.primary} size="20" />
						</View>
					) : (
						<View style={styles.button}>
							<AnimatedCircularProgress
								size={20}
								width={2}
								fill={downloadProgress * 100}
								tintColor={colors.primary}
								backgroundColor={colors.background}
							/>
						</View>
					)}
				</View>
			) : (
				<View>
					<View style={styles.button}>
						<Play fill={colors.primary} size="20" />
					</View>
				</View>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: colors.muted,
	},
	leftContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	image: {
		width: 40,
		aspectRatio: 1,
	},
	button: {
		backgroundColor: colors.muted,
		padding: 10,
		borderRadius: 50,
	},
})
