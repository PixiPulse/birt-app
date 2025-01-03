import React from 'react'
import * as Svg from 'react-native-svg'
import { colors } from '../token'

export default function Download({ fill, size = '24' }: { fill?: string; size?: string }) {
	return (
		<Svg.Svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			data-src="https://cdn.hugeicons.com/icons/download-04-solid-sharp.svg"
			role="img"
			color={fill || colors.foreground}
		>
			<Svg.Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13.0001 4L13.0001 11.5857L14.293 10.2927L15.7072 11.7069L12.0001 15.4143L8.29297 11.7069L9.70723 10.2927L11.0001 11.5857L11.0001 4H13.0001Z"
				fill={fill || colors.foreground}
			></Svg.Path>
			<Svg.Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5.66944 18L4.89737 15.6838L3 16.3162L4.22792 20H19.7721L21 16.3162L19.1026 15.6838L18.3306 18H5.66944Z"
				fill={fill || colors.foreground}
			></Svg.Path>
		</Svg.Svg>
	)
}
