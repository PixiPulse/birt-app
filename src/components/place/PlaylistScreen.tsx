import { View, Text, SectionList, StyleSheet, RefreshControl, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { colors, fontSize, screenPadding } from '@/constants/token'
import ErrorScreen from './ErrorScreen'
import EmptyScreen from './EmptyScreen'
import LoadingIndicator from '../ui/LoadingIndicator'
import { usePlayerContext } from '@/contexts/PlayerContext'
import axios from 'axios'
import { API_URL, useAuth } from '@/contexts/AuthContext'
import { useQuery } from '@tanstack/react-query'
import { useRefreshByUser } from '@/hooks/useRefreshByUser'
import Card from '../cards/LanguageCard'
import Header from './Header'
import Audio from '@/constants/icons/audio'
import { fonts } from '@/styles'
import FloatingPlayer from '../player/FloatingPlayer'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import { Image } from 'expo-image'

export default function PlaylistScreen() {
	const { currentTrack } = usePlayerContext()
	const { id } = useLocalSearchParams()
	const { authState } = useAuth()

	const fetchLanguages = async () => {
		return await axios.post(`${API_URL}/api/v1/place/${id}`, {
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
	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)
	if (isPending) return <LoadingIndicator />
	if (isError) return <ErrorScreen message={(error as any)?.response?.data?.error} />

	if (!data || data.data.length === 0) return <EmptyScreen />

	const title = data?.data[0]?.place?.name

	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<SectionList
				sections={[
					{
						title: title,
						data: [...data.data],
					},
				]}
				keyExtractor={(item, index) => item.id + index}
				renderItem={({ item }) => <Card data={item} />}
				renderSectionHeader={({ section: { title } }) => (
					<View style={{ marginBottom: 20 }}>
						<Header data={data?.data[0]?.place} />
						<View style={styles.title}>
							<Audio fill={colors.primary} />
							<Text style={[fonts.Bold, { fontSize: fontSize.base, color: colors.primary }]}>
								{title}
							</Text>
						</View>
					</View>
				)}
				refreshControl={
					<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />
				}
				style={{ paddingHorizontal: screenPadding.horizontal, flex: 1 }}
			/>

			{currentTrack && <FloatingPlayer />}
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
})
