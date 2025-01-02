import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useAuth } from '@/contexts/AuthContext'

export default function CustomerScreen() {
	const { id } = useLocalSearchParams()
	const { isLoading, authState } = useAuth()

	if (isLoading) return <Text>Loading...</Text>

	if (!authState?.authenticated) return <Redirect href={`/${id}/login`} />

	return (
		<View>
			<Text>{JSON.stringify(authState)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
