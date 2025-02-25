import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/token'

export default function LoadingIndicator() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={'large'} color={colors.primary} />
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
