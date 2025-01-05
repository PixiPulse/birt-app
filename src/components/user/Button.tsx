import { StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import { fonts } from "@/styles";
import { colors } from "@/constants/token";

export default function Button({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      {children}
      <Text style={[styles.text, fonts.normal]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryForeground,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
    flexDirection: 'row',
    textAlignVertical: 'center',
    gap: 16
  },
  text: {
    fontSize: 16,
  },
});