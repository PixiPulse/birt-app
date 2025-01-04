import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useAuth } from '@/contexts/AuthContext'
import LoadingIndicator from '@/components/ui/LoadingIndicator'
import PlaylistScreen from '@/components/place/PlaylistScreen'

export default function CustomerScreen() {
	const { id } = useLocalSearchParams()
	const { isLoading, authState } = useAuth()

	if (isLoading) return <LoadingIndicator />

	if (!authState?.authenticated) return <Redirect href={`/${id}/login`} />

	return <PlaylistScreen />
}
