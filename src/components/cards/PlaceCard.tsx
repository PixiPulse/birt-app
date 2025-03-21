import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'
import { colors, fontSize } from '@/constants/token'
import { fonts } from '@/styles'
import { BlurView } from 'expo-blur'
import Play from '@/constants/icons/play'
import Map from '@/constants/icons/map'
import { router } from 'expo-router'
import {Platform} from 'react-native'
import { ASSET_URL } from '@/lib/data'

type CardProps = {
	id: string
	name: string
	imgUrl: string
}

export default function Card({ name, imgUrl, id }: CardProps) {
	return (
		<ImageBackground source={`${ASSET_URL}${imgUrl}`} style={styles.container} transition={500} contentFit="cover">
			<View style={styles.buttonContainer}>
				<TouchableHighlight style={styles.button} activeOpacity={0.7} onPress={() => router.push(`/${id}`)}>
					<BlurView intensity={Platform.OS === "ios"? 50 : 90} tint='light' style={{ padding: 7 }}>
						<View style={{ padding: 5, backgroundColor: colors.background, borderRadius: 100 }}>
							<Play fill={colors.secondary} />
						</View>
					</BlurView>
				</TouchableHighlight>
			</View>
			<BlurView tint='dark' intensity={Platform.OS === 'ios' ? 10 : 50} style={styles.textContainer}>
                <Map size='20' />
				<Text style={[fonts.Bold, { fontSize: fontSize.base, color: colors.primaryForeground }]}>
					{name}
				</Text>
			</BlurView>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 180,
		backgroundColor: colors.muted,
		marginBottom: 20,
		borderRadius: 10,
		overflow: 'hidden',
	},
	textContainer: {
		padding: 15,
		paddingVertical: 15,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		borderRadius: 100,
		overflow: 'hidden',
	},
})
