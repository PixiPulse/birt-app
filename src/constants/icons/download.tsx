import { View, Text } from 'react-native'
import React from 'react'
import * as Svg from 'react-native-svg'
import { colors } from '../token'

export default function Download({ fill, size="24" }: { fill?: string, size?:string }) {
	return (
		<Svg.Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			data-src="https://cdn.hugeicons.com/icons/download-04-stroke-standard.svg"
			role="img"
			color={fill || colors.foreground}
		>
			<Svg.Path
				d="M9.5 12L12 14.5L14.5 12M12 4.5V13.8912"
				stroke={fill || colors.foreground}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></Svg.Path>
			<Svg.Path
				d="M20 16.5L19.7785 17.8288C19.6178 18.7932 18.7834 19.5 17.8057 19.5H6.19425C5.21658 19.5 4.3822 18.7932 4.22147 17.8288L4 16.5"
				stroke={fill || colors.foreground}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></Svg.Path>
		</Svg.Svg>
	)
}
