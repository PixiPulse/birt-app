import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { colors, fontSize } from '@/constants/token'

export default function Logo({ textColor }: { textColor?: string }) {
	return (
		<View style={[styles.logo]}>
			<Image
				style={{ width: 45, height: 45, overflow: 'hidden', borderRadius: 100 }}
				source={require('@/assets/icon.png')}
			/>
			<View >
				<Text
					style={[
						{ fontFamily: 'Bold', fontSize: fontSize.base },
						{ color: textColor ? textColor : colors.foreground },
					]}
				>
					BIRT
				</Text>
				<Text style={{ fontSize: fontSize.xs, marginBottom: 3 }}>G u i d e</Text>
			</View>
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
