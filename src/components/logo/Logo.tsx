import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { fontSize } from '@/constants/token'

export default function Logo() {
	return (
		<View style={styles.logo}>
			<Image style={{ width: 45, height: 45 }} source={require('@/assets/icon.png')} />
			<Text style={{ fontFamily: 'Bold', fontSize: fontSize.base }}>BIRT</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 45,
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
})