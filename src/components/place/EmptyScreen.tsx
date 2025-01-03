import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontSize } from '@/constants/token'
import Empty from '@/constants/icons/empty'
import { fonts } from '@/styles'

export default function EmptyScreen() {
	return (
		<View style={styles.container}>
			<Empty size="50" />
			<Text style={[fonts.normal, {fontSize: fontSize.xs, marginTop: 10}]}>No data to show</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
	},
})
