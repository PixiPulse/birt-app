import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather'
import { useDownloadFile } from '@/hooks/useDownloadFile'
import { usePlayerContext } from '@/contexts/PlayerContext'
import { API_URL, useAuth } from '@/contexts/AuthContext'
import { colors, screenPadding } from '@/constants/token'
import { fonts } from '@/styles'
import Button from '@/components/user/Button'
import { Image } from 'expo-image'
import Security from '@/constants/icons/security'
import Docs from '@/constants/icons/docs'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import LoadingIndicator from '@/components/ui/LoadingIndicator'
import ErrorScreen from '@/components/place/ErrorScreen'
import EmptyScreen from '@/components/place/EmptyScreen'
import { router } from 'expo-router'

export default function UserScreen() {
	const { onLogout } = useAuth()
	const { handleDeleteFiles } = useDownloadFile()
	const { handleCancel } = usePlayerContext()

	const handleLogout = async () => {
		await onLogout!()
		await handleDeleteFiles()
		await handleCancel()
		router.back()
	}

	const fetchUserData = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/v1/user/1`)

			return res.data
		} catch (error) {
			return { error: true, message: (error as any).response.data }
		}
	}

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['user'],
		queryFn: fetchUserData,
	})

	if (isPending) return <LoadingIndicator />
	if (isError) return <ErrorScreen message={(error as any)?.response?.data?.error} />

	if (!data) return <EmptyScreen />

	const deleteAccount = async () => {
		try {
			await axios.delete(`${API_URL}/api/v1/user/${data.id}`)
			return {
				message: 'Successfull',
			}
		} catch (error) {
			return { error: true, message: (error as any).response.data }
		}
	}

	const showAlert = () => {
		Alert.alert(
		  "Warning",
		  "Are you sure to delete your accout. This action can not be undone after confirmation.",
		  [
			{ text: "Cancel", style: "cancel" },
			{ text: "OK", onPress: () => {
				deleteAccount()
				handleLogout()
			} }
		  ]
		);
	  };
	  

	return (
		<SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
			<View style={[styles.container]}>
				<View style={styles.userContainer}>
					<Image
						source={require('@/assets/icon.png')}
						style={{ width: 45, height: 45, borderRadius: 100 }}
					/>
				</View>

				<Text style={[fonts.Bold, styles.title]}>{data?.username}</Text>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.button}
					onPress={() => {
						handleLogout()
					}}
				>
					<Feather name="log-out" size={16} color={colors.secondaryForeground} />
					<Text style={[styles.buttonText, fonts.normal]}>Logout</Text>
				</TouchableOpacity>
			</View>

			{/* buttons */}
			<View
				style={[
					styles.buttonContainer,
					{ paddingHorizontal: screenPadding.horizontal, paddingTop: 50 },
				]}
			>
				<Button title="Privacy Policy" onPress={() => router.push('/policy')}>
					<Security fill={colors.primary} />
				</Button>
				<Button title="Terms & Conditions" onPress={() => router.push('/terms')}>
					<Docs fill={colors.primary} />
				</Button>
			</View>

			{/* delete button */}
			<TouchableOpacity
				activeOpacity={0.7}
				style={[styles.deleteButton]}
				onPress={showAlert}
			>
				<Feather name="trash" size={16} color={colors.secondaryForeground} />
				<Text style={[styles.buttonText, fonts.normal]}>Delete account</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 22,
		marginBottom: 10,
	},
	button: {
		backgroundColor: colors.ring,
		borderRadius: 8,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	deleteButton: {
		backgroundColor: colors.ring,
		borderTopEndRadius: 8,
		borderTopStartRadius: 8,
		paddingHorizontal: 20,
		paddingVertical: 20,
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 16,
		color: colors.secondaryForeground,
		textAlignVertical: 'center',
	},

	text: {
		fontSize: 24,
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	userContainer: {
		backgroundColor: colors.primary,
		height: 50,
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		marginBottom: 16,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'column',
		gap: 10,
		marginTop: 10,
	},
})
