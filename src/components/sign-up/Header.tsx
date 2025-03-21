import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../logo/Logo'
import { colors, fontSize } from '@/constants/token'

export default function Header() {
	return (
		<View style={styles.container}>
			<Logo textColor={colors.background} />

			<View style={styles.textContainer}>
				<Text style={styles.title}>Welcome to BIRT</Text>
				<Text style={styles.slogan}>Create your account to get your audio guide</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
	},
	textContainer: {
		marginVertical: 30,
	},
	title: {
		textAlign: 'center',
		fontSize: fontSize.lg,
		fontFamily: 'Bold',
		color: colors.background
	},
	slogan: {
		textAlign: 'center',
		color: colors.background,
		fontFamily: 'Regular'
	},
})
