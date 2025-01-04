import { View, Text } from 'react-native'
import React from 'react'
import * as Svg from 'react-native-svg'
import { colors } from '../token'

export default function Document({ fill, size="24" }: { fill?: string, size?:string }) {
	return (
		<Svg.Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			data-src="https://cdn.hugeicons.com/icons/clipboard-solid-standard.svg"
			role="img"
			color={fill || colors.foreground}
		>
			<Svg.Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.4812 1.35132C11.0485 0.94523 9.57443 1.79771 9.18389 3.23081L6.34596 13.6446C5.96843 15.0299 6.73577 16.4805 8.10449 16.9239L16.43 19.6208C17.8926 20.0946 19.4369 19.2301 19.8274 17.7477L22.66 6.99522C23.0331 5.57859 22.214 4.10997 20.8014 3.70957L12.4812 1.35132ZM15.5 9C16.3284 9 17 8.32842 17 7.5C17 6.67157 16.3284 6 15.5 6C14.6716 6 14 6.67157 14 7.5C14 8.32842 14.6716 9 15.5 9Z"
				fill={fill || colors.foreground}
			></Svg.Path>
			<Svg.Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1.09882 9.73457C0.598096 7.82434 2.0659 6 4.01843 6H5.44831C6.00059 6 6.44831 6.44772 6.44831 7C6.44831 7.55228 6.00059 8 5.44831 8H4.01843C3.33492 8 2.87549 8.62482 3.03346 9.22745L5.92462 20.257C6.05789 20.7655 6.58999 21.0989 7.14142 20.9736L11.7796 19.9199C12.3181 19.7975 12.8539 20.1349 12.9763 20.6735C13.0986 21.212 12.7612 21.7478 12.2227 21.8702L7.58452 22.9239C6.00531 23.2827 4.40311 22.3402 3.98998 20.7642L1.09882 9.73457Z"
				fill={fill || colors.foreground}
			></Svg.Path>
		</Svg.Svg>
	)
}
