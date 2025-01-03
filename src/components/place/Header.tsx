import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '@/styles'
import { colors, fontSize } from '@/constants/token'
import { Image } from 'expo-image'

export default function Header({data}: {data: any}) {
  return (
    <View>

      {/* image */}
      <Image source={data.imgUrl} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 16/9,
        backgroundColor: colors.muted,
        borderRadius: 10,
        marginVertical: 10,
        objectFit: 'cover'
    }
})