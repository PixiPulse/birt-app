import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontSize } from '@/constants/token'
import ErrorBlock from '@/constants/icons/error-block'
import { useAuth } from '@/contexts/AuthContext'
import { fonts } from '@/styles'
import { useDownloadFile } from '@/hooks/useDownloadFile'
import { usePlayerContext } from '@/contexts/PlayerContext'
import Feather from '@expo/vector-icons/Feather'


export default function ErrorScreen({ message }: { message: string }) {
	const { onLogout } = useAuth()
	const { handleDeleteFiles } = useDownloadFile()
	const { handleCancel } = usePlayerContext()

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
						await handleCancel()
					}}
				>
					<Feather name="log-out" size={16} color={colors.secondaryForeground} />
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
		backgroundColor: colors.ring,
		borderRadius: 8,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
})
