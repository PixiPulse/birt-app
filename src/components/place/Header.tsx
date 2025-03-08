import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/token'
import { Image } from 'expo-image'
import { ASSET_URL } from '@/lib/data'

export default function Header({ data }: { data: any }) {
	return (
		<View>
			{/* image */}
			<Image source={`${ASSET_URL}${data.imgUrl}`} style={styles.image} />
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		aspectRatio: 16 / 9,
		backgroundColor: colors.muted,
		borderRadius: 10,
		marginVertical: 10,
		objectFit: 'cover',
	},
})
