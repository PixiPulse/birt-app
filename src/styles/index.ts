import { colors, fontSize } from '@/constants/token'
import { StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.foreground,
	},
})

export const fonts = StyleSheet.create({
	normal: {
		fontFamily: 'Regular',
	},
	Bold: {
		fontFamily: 'Bold',
	},
	light: {
		fontFamily: 'Light',
	},
	semibold: {
		fontFamily: 'Semibold',
	},
})
