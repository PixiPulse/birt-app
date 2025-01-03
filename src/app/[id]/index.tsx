import {
	RefreshControl,
	ScrollView,
	SectionList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { API_URL, useAuth } from '@/contexts/AuthContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ErrorScreen from '@/components/place/ErrorScreen'
import LoadingIndicator from '@/components/ui/LoadingIndicator'
import EmptyScreen from '@/components/place/EmptyScreen'
import { colors, fontSize, screenPadding } from '@/constants/token'
import Header from '@/components/place/Header'
import { fonts } from '@/styles'
import { useRefreshByUser } from '@/hooks/useRefreshByUser'
import Card from '@/components/cards/LanguageCard'
import Audio from '@/constants/icons/audio'

export default function CustomerScreen() {
	const { id } = useLocalSearchParams()
	const { isLoading, authState, onLogout } = useAuth()

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

	if (isLoading || isPending) return <LoadingIndicator />

	if (!authState?.authenticated) return <Redirect href={`/${id}/login`} />

	if (isError) return <ErrorScreen message={(error as any)?.response?.data?.error} />

	if (!data) return <EmptyScreen />

	const title = data?.data[0]?.place?.name

	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<SectionList
				sections={[
					{
						title: title,
						data: [...data.data, ...data.data, ...data.data, ...data.data, ...data.data],
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
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10
	},
})
