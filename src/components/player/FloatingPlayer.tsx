import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "@/constants/token";
import { fonts } from "@/styles";
import { usePlayerContext } from "@/contexts/PlayerContext";

export default function FloatingPlayer() {
  const { currentTrack, handlePlayPause, isPlaying } = usePlayerContext();

  return (
    <TouchableOpacity style={[styles.container]} activeOpacity={0.85} onPress={() => router.push('/modal')}>
      {currentTrack && (
        <>
          <View style={styles.wrapper}>
            <View>
              <Text style={[fonts.Bold, styles.title]}>
                {currentTrack.place.name}
              </Text>
              <Text style={[fonts.semibold, styles.subtitle]}>
                {currentTrack?.language?.name ?? ""}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <TouchableOpacity onPress={handlePlayPause}>
                <Entypo
                  name={!isPlaying?"controller-play": 'controller-paus'}
                  size={24}
                  color={colors.primaryForeground}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    backgroundColor: colors.primary,
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: colors.primaryForeground,
  },
  subtitle: {
    fontSize: 14,
    color: colors.primaryForeground,
  },
  image: {
    width: 65,
    height: 65,
    objectFit: "cover",
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
});
