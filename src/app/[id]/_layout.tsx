import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function CustomerLayout() {
	return (
		<SafeAreaProvider>
			<Stack>
				<Stack.Screen name="index"  />
				<Stack.Screen name="login" />
			</Stack>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({})
