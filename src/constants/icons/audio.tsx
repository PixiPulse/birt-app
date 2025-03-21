import React from 'react'
import * as Svg from 'react-native-svg'
import { colors } from '../token'

export default function Audio({ fill, size="24" }: { fill?: string, size?:string }) {
	return (
		<Svg.Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			data-src="https://cdn.hugeicons.com/icons/audio-book-02-stroke-sharp.svg"
			role="img"
			color={fill || colors.foreground}
		>
			<Svg.Path
				d="M17.9772 19.4879C17.9772 20.8677 16.8595 21.9862 15.4808 21.9862C14.1021 21.9862 12.9844 20.8677 12.9844 19.4879C12.9844 18.1081 14.1021 16.9895 15.4808 16.9895C16.8595 16.9895 17.9772 18.1081 17.9772 19.4879ZM17.9772 19.4879V12.9922C18.31 13.4919 18.9758 15.9902 20.9729 15.9902"
				stroke={fill || colors.foreground}
				stroke-width="1.5"
				stroke-linejoin="round"
			></Svg.Path>
			<Svg.Path
				d="M19.9741 1.98633H6.09378C4.85049 1.98633 2.81304 2.87877 2.98726 5.24493M2.98726 5.24493C3.16147 7.61109 5.14364 7.99734 6.09378 7.99734H16.9757M2.98726 5.24493V18.5281C2.872 19.5916 3.30365 21.8082 6.0431 21.9783H10.9703M19.9472 11.0163V7.99734H16.9757M16.9757 7.99734V4.98032C16.9757 4.9748 16.9712 4.97033 16.9657 4.97033H5.96814"
				stroke={fill || colors.foreground}
				stroke-width="1.5"
			></Svg.Path>
		</Svg.Svg>
	)
}
