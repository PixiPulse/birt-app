import React from 'react'
import * as Svg from 'react-native-svg'
import { colors } from '../token'

export default function ErrorBlock({ fill, size="24" }: { fill?: string, size?:string }) {
	return (
		<Svg.Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			data-src="https://cdn.hugeicons.com/icons/lock-sync-02-solid-sharp.svg"
			role="img"
			color={fill || colors.foreground}
		>
			<Svg.Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.0014 6.25017C10.3636 6.25017 9.00137 7.54785 9.00137 9.19067V10.6478C8.23103 11.3977 7.75137 12.4362 7.75137 13.5927C7.75137 15.9076 9.67324 17.7502 12.0014 17.7502C14.3295 17.7502 16.2514 15.9076 16.2514 13.5927C16.2514 12.4362 15.7717 11.3977 15.0014 10.6478V9.19067C15.0014 7.54785 13.6392 6.25017 12.0014 6.25017ZM12.0014 9.43528C11.4747 9.43528 10.9689 9.52956 10.5014 9.70226V9.19067C10.5014 8.41392 11.1539 7.75017 12.0014 7.75017C12.8489 7.75017 13.5014 8.41392 13.5014 9.19067V9.70226C13.0339 9.52956 12.528 9.43528 12.0014 9.43528Z"
				fill={fill || colors.foreground}
			></Svg.Path>
			<Svg.Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.0249 3.20463C7.15164 3.20463 3.20523 7.14476 3.20523 12.0001C3.20523 16.8554 7.15164 20.7955 12.0249 20.7955C15.6414 20.7955 18.7502 18.625 20.1114 15.5171L21.9018 16.3013C20.2395 20.0965 16.4431 22.7501 12.0249 22.7501C6.07673 22.7501 1.25069 17.9394 1.25069 12.0001C1.25069 6.06075 6.07673 1.25008 12.0249 1.25008C17.6102 1.25008 22.2049 5.49081 22.7459 10.926C22.7787 11.2557 22.6423 11.5795 22.3834 11.7863C22.1246 11.9931 21.7787 12.0547 21.4644 11.9499L18.5326 10.9727L19.1506 9.11842L20.5036 9.5694C19.4465 5.8956 16.0516 3.20463 12.0249 3.20463Z"
				fill={fill || colors.foreground}
			></Svg.Path>
		</Svg.Svg>
	)
}