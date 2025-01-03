import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontSize } from '@/constants/token'
import ErrorBlock from '@/constants/icons/error-block'
import { useAuth } from '@/contexts/AuthContext'
import { fonts } from '@/styles'
import { useDownloadFile } from '@/hooks/useDownloadFile'

export default function ErrorScreen({ message }: { message: string }) {
	const { onLogout } = useAuth()
	const { handleDeleteFiles } = useDownloadFile();
	

	return (
		<View style={styles.contaner}>
			<ErrorBlock size="100" fill={colors.muted} />

			<Text style={{ textAlign: 'center', width: '70%', fontFamily: 'Regular' }}>
				This account is not access for this content. Please sign in with another account or contact
				our service
			</Text>

			<Text style={[fonts.normal, { fontSize: fontSize.xs }]}>{message}</Text>

			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.button}
					onPress={async () => {
						await onLogout!()
						await handleDeleteFiles()
					}}
				>
					<Text
						style={{ textAlign: 'center', color: colors.primaryForeground, fontFamily: 'Bold' }}
					>
						Logout
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	contaner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
		gap: 10,
	},
	button: {
		marginHorizontal: 'auto',
		width: '50%',
		backgroundColor: colors.ring,
		padding: 10,
		borderRadius: 10,
	},
})
