import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useAuth } from '@/contexts/AuthContext'

export default function CustomerScreen() {
	const { id } = useLocalSearchParams()
	const { isLoading, authState, onLogout } = useAuth()

	if (isLoading) return <Text>Loading...</Text>

	if (!authState?.authenticated) return <Redirect href={`/${id}/login`} />

	return (
		<View>
			<TouchableOpacity onPress={async() => {
				await onLogout!()
			}}>
				<Text>Logout</Text>
			</TouchableOpacity>
			<Text>{JSON.stringify(authState)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
