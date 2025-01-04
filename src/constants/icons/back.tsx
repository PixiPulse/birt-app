import * as Svg from 'react-native-svg'
import React from 'react'
import { colors } from '../token';

export default function Back({ fill, size = '24' }: { fill?: string; size?: string }) {
	return (
		<Svg.Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			data-src="https://cdn.hugeicons.com/icons/arrow-left-02-solid-standard.svg"
			role="img"
			color={fill || colors.foreground}
		>
			<Svg.Path
				d="M8.2929 17.7071C8.68342 18.0976 9.31659 18.0976 9.70711 17.7071C10.0976 17.3166 10.0976 16.6834 9.7071 16.2929L6.41419 13L20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L6.41423 11L9.70707 7.7071C10.0976 7.31657 10.0976 6.68341 9.70706 6.29289C9.31653 5.90237 8.68337 5.90237 8.29285 6.2929L3.29823 11.2876C3.27977 11.3058 3.26202 11.3247 3.24501 11.3442C3.17745 11.4219 3.12387 11.5074 3.08425 11.5976C3.03045 11.7199 3.00042 11.855 3 11.997L3 12C3 12.0031 3.00001 12.0062 3.00004 12.0093C3.00118 12.135 3.02554 12.2553 3.06904 12.3659C3.11782 12.4902 3.19243 12.6067 3.2929 12.7071L8.2929 17.7071Z"
				fill={fill || colors.foreground}
			></Svg.Path>
		</Svg.Svg>
	)
}