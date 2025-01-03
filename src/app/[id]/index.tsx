import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { API_URL, useAuth } from '@/contexts/AuthContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ErrorScreen from '@/components/place/ErrorScreen'

export default function CustomerScreen() {
	const { id } = useLocalSearchParams()
	const { isLoading, authState, onLogout } = useAuth()

	const fetchLanguages = async () => {
		return await axios.post(`${API_URL}/apia/v1/place/id`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authState?.token}`,
			},
		})
	}

	const { data, isPending, isError, error, refetch } = useQuery({
		queryKey: ['id', { id }],
		queryFn: fetchLanguages,
	})

	if (isLoading || isPending) return <Text>Loading...</Text>

	if (!authState?.authenticated) return <Redirect href={`/${id}/login`} />

	if(isError) return (
		<ErrorScreen message={(error as any)?.response?.data?.error} />
	)

	return (
		<View>
			<TouchableOpacity
				onPress={async () => {
					await onLogout!()
				}}
			>
				<Text>Logout</Text>
			</TouchableOpacity>
			<Text>{JSON.stringify(data)}</Text>
			<Text>{JSON.stringify((error as any)?.response?.data)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
