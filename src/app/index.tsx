import { RefreshControl, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/container/container'
import { API_URL } from '@/contexts/AuthContext'
import { useQuery } from '@tanstack/react-query'
import { useRefreshByUser } from '@/hooks/useRefreshByUser'
import LoadingIndicator from '@/components/ui/LoadingIndicator'
import Card from '@/components/cards/PlaceCard'
import { defaultStyles, fonts } from '@/styles'
import { colors, fontSize, screenPadding } from '@/constants/token'

export default function HomeScreen() {
	const fetchPlaces = async () => {
		const data = await fetch(API_URL + '/api/v1/place', {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const res = await data.json()

		return res
	}

	const { isPending, data, error, isError, refetch, isLoading } = useQuery({
		queryKey: ['places'],
		queryFn: fetchPlaces,
	})

	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch)

	if (isPending || isLoading) return <LoadingIndicator />

	if (isError) return <Text>{error.message}</Text>

	if (!data.data || data.data == undefined) return <Text>No Data</Text>

	return (
		<SectionList
			style={[defaultStyles.container, { paddingHorizontal: screenPadding.horizontal }]}
			sections={[
				{
					title: 'This Month',
					data: data.data,
				},
			]}
			keyExtractor={(item, index) => item.id + index}
			renderItem={({ item }) => <Card {...item} />}
			renderSectionHeader={({ section: { title } }) => (
				<View>
					<Text style={[fonts.normal, styles.subtitle]}>Hot Playlist</Text>
					<Text style={[fonts.Bold, styles.title]}>{title}</Text>
				</View>
			)}
			refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}
		/>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: fontSize.lg,
		color: colors.secondary,
		textAlign: 'center',
		marginBottom: 20,
	},
	subtitle: {
		textAlign: 'center',
		fontSize: fontSize.sm,
    marginTop: 20
	},
})
