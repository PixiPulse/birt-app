import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/components/sign-up/Header'
import { colors, screenPadding } from '@/constants/token'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '@/constants/icons/back'
import { router } from 'expo-router'
import SignUpForm from '@/components/sign-up/SignUpForm'
import { defaultStyles } from '@/styles'

export default function SignUpScreen() {
	return (
		<SafeAreaView style={[defaultStyles.container, styles.container]}>
			<ImageBackground
				style={{ width: '150%', height: '150%', position: 'absolute', opacity: 0.15 }}
				source={require('@/assets/bg-login.jpg')}
			></ImageBackground>
			<TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => router.back()}>
				<Back fill={colors.background} />
			</TouchableOpacity>
			<Header />
			<SignUpForm />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: screenPadding.horizontal,
		backgroundColor: colors.primary,
		paddingVertical: 10,
		position: 'relative'
	},
	button: {
		padding: 15,
		marginRight: 'auto',
		borderRadius: 30,
		borderWidth: 1,
		borderColor: colors.primary
	},
})
