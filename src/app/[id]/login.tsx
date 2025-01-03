import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '@/components/login/Header'
import LoginForm from '@/components/login/LoginForm'
import { defaultStyles } from '@/styles'
import { colors, screenPadding } from '@/constants/token'

export default function LoginScreen() {
	return (
		<View style={[defaultStyles.container, { paddingHorizontal: screenPadding.horizontal, backgroundColor: colors.primary }]}>
			<ImageBackground
				style={{ width: '120%', height: '100%', position:'absolute', opacity: 0.1 }}
				source={require('@/assets/bg-login.jpg')}
			>
			</ImageBackground>
				<Header />
				<LoginForm />
		</View>
	)
}

const styles = StyleSheet.create({})
