import { Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Entypo from '@expo/vector-icons/Entypo'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Redirect, router } from 'expo-router'
import Slider from '@react-native-community/slider'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'
import { usePlayerContext } from '@/contexts/PlayerContext'
import { colors } from '@/constants/token'
import { fonts } from '@/styles'
import Pause from '@/constants/icons/pause'
import Play from '@/constants/icons/play'

export default function Modal() {
	const {
		currentTrack,
		currentTime,
		totalDuration,
		progress,
		isPlaying,
		handlePlayPause,
		handleCancel,
		handleSliderValue,
	} = usePlayerContext()

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60000)
		const seconds = Math.floor((time % 60000) / 1000)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	if (currentTrack) {
		return (
			<SafeAreaView style={styles.container}>
				{/* <LinearGradient
					// Background Linear Gradient
					colors={[colors.primary, colors.foreground]}
					style={styles.background}
				/> */}
				<ImageBackground
					
					source={require('@/assets/bg-login.jpg')}
					style={styles.background}
				></ImageBackground>
				{/* top buttons */}
				<View style={styles.topButtonsContainer}>
					<TouchableOpacity
						style={{ backgroundColor: 'transparent' }}
						onPress={() => router.back()}
					>
						<Entypo
							name={Platform.OS === 'ios' ? 'chevron-down' : 'chevron-left'}
							size={24}
							color={colors.primaryForeground}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ backgroundColor: 'transparent' }}
						onPress={() => {
							router.back()
							handleCancel()
						}}
					>
						<AntDesign name="close" size={24} color={colors.primaryForeground} />
					</TouchableOpacity>
				</View>

				{/* album art */}
				<View style={styles.imageContainer}>
					<Image
						source={currentTrack?.imgUrl[0]}
						style={styles.image}
						contentFit="cover"
						transition={1000}
					/>
				</View>

				{/* description */}
				<View style={styles.descriptionContainer}>
					<Text style={[fonts.Bold, styles.title]}>{currentTrack.place.name}</Text>
					<Text style={[fonts.light, styles.subtitle]}>{currentTrack.language.name}</Text>
				</View>

				{/* controls */}
				<View>
					{/* durations */}
					<View style={styles.durationContainer}>
						<Text style={[styles.durationText, fonts.normal]}>{formatTime(currentTime)}</Text>
						<Text style={[styles.durationText, fonts.normal]}>{formatTime(totalDuration)}</Text>
					</View>

					{/* slider */}
					<Slider
						style={{ width: '100%', height: 40 }}
						minimumValue={0}
						maximumValue={1}
						value={progress}
						onValueChange={(value) => {
							handleSliderValue(value)
						}}
						maximumTrackTintColor={colors.background}
						minimumTrackTintColor={colors.primary}
						thumbTintColor={colors.primary}
					/>
				</View>

				{/* buttons */}
				<View style={styles.playerButtonContainer}>
					<TouchableOpacity
						style={{ backgroundColor: colors.primaryForeground, padding: 10, borderRadius: 100 }}
						onPress={handlePlayPause}
					>
						{isPlaying ? (
							<Pause fill={colors.primary} size="40" />
						) : (
							<Play fill={colors.primary} size="40" />
						)}
					</TouchableOpacity>
				</View>
				<StatusBar style="auto" />
			</SafeAreaView>
		)
	}
	Redirect({ href: '/(home)' })
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.primary,
		justifyContent: 'space-between',
	},

	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: '120%',
		opacity: 0.15
	},
	topButtonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	imageContainer: {
		marginHorizontal: 'auto',
	},
	image: {
		width: '85%',
		aspectRatio: 1,
		borderRadius: 20,
		elevation:10
	},
	descriptionContainer: {},
	title: {
		color: colors.primaryForeground,
		fontSize: 22,
	},
	subtitle: {
		color: colors.primaryForeground,
		fontSize: 16,
	},
	durationContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '96%',
		paddingLeft: 10,
	},
	durationText: {
		color: colors.primaryForeground,
		fontSize: 14,
	},
	playerButtonContainer: {
		marginHorizontal: 'auto',
		marginBottom: 20,
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
})
