import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'

export default function _layout() {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</View>
	)
}

const styles = StyleSheet.create({})
