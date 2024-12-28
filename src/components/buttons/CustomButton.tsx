import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/token'

type CustomButtonProps = TouchableOpacityProps & {
    title: string
}

export default function CustomButton({style, title,...props}: CustomButtonProps) {
  return (
    <TouchableOpacity style={[style, styles.container]} {...props} activeOpacity={0.85}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        textAlign:'center',
        fontFamily: 'Regular',
        fontSize: 18,
        color: Colors.primaryForeground
    }
})