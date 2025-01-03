import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { fonts } from '@/styles'
import { colors, fontSize } from '@/constants/token'
import Download from '@/constants/icons/download'

export default function Card({ data }: { data: any }) {
	return (
		<View style={styles.container}>
			{/* left */}
			<View style={styles.leftContainer}>
				<Image style={styles.image} source={data?.language?.imgUrl} />
				<Text style={[fonts.normal, {fontSize: fontSize.sm}]}>{data?.language?.name}</Text>
			</View>

			{/* right */}
			<View>
                <Download fill={colors.primary} />
            </View>
		</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.muted,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    image: {
        width: 40,
        aspectRatio: 1
    }
})
