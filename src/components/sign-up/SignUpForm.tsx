import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../buttons/CustomButton'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { API_URL, useAuth } from '@/contexts/AuthContext'
import { fonts } from '@/styles'
import { colors, fontSize, screenPadding } from '@/constants/token'
import Input from '../login/Input'
import axios from 'axios'

export default function SignUpForm() {
	const { id } = useLocalSearchParams()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState<any>(null)
	const [error, setError] = useState('')

	const handleSubmit = async () => {
		setLoading(true)

		const response = await fetch(`http://167.172.59.31:5001/api/v1/sign-up`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: email, password: password, placeId: id }),
		})

		const data = await response.json()

		if (response.ok) {
			router.replace(`/${id}`)
		} else if (data.errors) {
			setErrors(data.errors)
		} else {
			setError('Something went wrong')
		}

		setLoading(false)
	}

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				{/* error box */}
				{error && (
					<View style={styles.errorBox}>
						<Text style={[fonts.normal, { fontSize: fontSize.sm, color: colors.background }]}>
							{error}
						</Text>
					</View>
				)}

				{/* form */}
				<View style={styles.fields}>
					<Input
						iconName="alternate-email"
						keyboardType="default"
						placeholder="Username"
						value={email}
						onChangeText={setEmail}
					/>
					{errors?.username && (
						<Text style={[fonts.normal, { color: colors.primaryLight, fontSize: fontSize.xs }]}>
							{errors.username[0]}
						</Text>
					)}
				</View>
				<View style={styles.fields}>
					<Input
						iconName="password"
						secureTextEntry={true}
						placeholder="Password"
						value={password}
						onChangeText={setPassword}
					/>
					{errors?.username && (
						<Text style={[fonts.normal, { color: colors.primaryLight, fontSize: fontSize.xs }]}>
							{errors['password'][0]}
						</Text>
					)}
				</View>

				<CustomButton
					style={{ borderColor: colors.accent, borderWidth: 1 }}
					title={loading ? 'Loading...' : 'Sign up'}
					disabled={loading}
					onPress={handleSubmit}
				/>
			</View>

			<View style={{ paddingHorizontal: screenPadding.horizontal, paddingTop: 40 }}>
				<Text
					style={{
						textAlign: 'center',
						fontFamily: 'Regular',
						fontSize: fontSize.xs,
						color: colors.background,
					}}
				>
					By signin, you agree to our{' '}
					<Link style={styles.link} href={'/terms'}>
						Term of service
					</Link>{' '}
					and{' '}
					<Link style={styles.link} href={'/policy'}>
						Privacy policy
					</Link>
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flex: 0.95,
	},
	form: {
		gap: 30,
	},
	title: {
		fontSize: 30,
		marginBottom: 40,
		fontFamily: 'PoppinsBold',
		textAlign: 'center',
	},
	fields: {
		flexDirection: 'column',
		gap: 5,
	},

	link: {
		color: colors.primaryLight,
		textDecorationLine: 'underline',
	},
	errorBox: {
		backgroundColor: colors.ring,
		padding: 10,
		borderRadius: 10,
	},
})
