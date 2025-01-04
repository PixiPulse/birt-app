import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/components/login/Header'
import LoginForm from '@/components/login/LoginForm'
import { defaultStyles } from '@/styles'
import { colors, screenPadding } from '@/constants/token'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '@/constants/icons/back'
import { router } from 'expo-router'

export default function LoginScreen() {
	return (
		<SafeAreaView
			style={[
				defaultStyles.container,
				{
					paddingHorizontal: screenPadding.horizontal,
					backgroundColor: colors.primary,
					paddingVertical: 10,
				},
			]}
		>
			<ImageBackground
				style={{ width: '150%', height: '150%', position: 'absolute', opacity: 0.15 }}
				source={require('@/assets/bg-login.jpg')}
			></ImageBackground>
			<TouchableOpacity activeOpacity={0.7} style={{ padding: 10 }} onPress={() => router.back()}>
				<Back fill={colors.background} />
			</TouchableOpacity>
			<Header />
			<LoginForm />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})
