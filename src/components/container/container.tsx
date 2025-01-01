import { View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { screenPadding } from '@/constants/token'

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<View style={[defaultStyles.container, { paddingHorizontal: screenPadding.horizontal }]}>{children}</View>
	)
}

