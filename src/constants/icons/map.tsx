import { View, Text } from 'react-native'
import React from 'react'
import * as Svg from 'react-native-svg'
import { colors } from '../token'

export default function map({ fill, size="24" }: { fill?: string, size?:string }) {
	return (
		<Svg.Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			data-src="https://cdn.hugeicons.com/icons/navigation-03-solid-rounded.svg"
			role="img"
			color={fill || colors.foreground}
            stroke={colors.primaryForeground}
		>
			<Svg.Path
				d="M20.4155 3.66085C22.3012 5.52939 19.2842 20.7253 16.1883 20.9931C13.5911 21.2177 12.7819 16.0954 12.2348 14.4719C11.695 12.8696 11.0943 12.2927 9.50513 11.767C5.46811 10.4315 3.4496 9.76374 3.04996 8.70639C1.99171 5.90649 18.0071 1.27438 20.4155 3.66085Z"
				fill={fill || colors.primary}
			></Svg.Path>
		</Svg.Svg>
	)
}
