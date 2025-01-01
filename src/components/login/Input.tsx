import { StyleSheet, TextInput, View, TextInputProps } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/token";

type InputProps = TextInputProps & {
  iconName: "alternate-email" | "password" | undefined;
};

export default function Input({ iconName, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <MaterialIcons
        name={iconName}
        style={styles.icon}
        size={24}
        color={Colors.mutedForeground}
      />
      <TextInput
        style={[styles.input, isFocused ? styles.focus : styles.blur]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    left: 10,
    transform: [{ translateY: -12 }],
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.input,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 50,
    fontSize: 16,
    backgroundColor: Colors.background,
    fontFamily: "Regular",
  },
  focus: {
    borderColor: Colors.ring,
  },
  blur: {
    borderColor: Colors.input,
  },
});