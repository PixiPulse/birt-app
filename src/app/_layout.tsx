import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { colors, fontSize } from '@/constants/token'
import { QueryClient, QueryClientProvider, focusManager } from '@tanstack/react-query'
import { AppStateStatus, Platform, StyleSheet, Text, View } from 'react-native'
import { useOnlineManager } from '@/hooks/useOnlineManager'
import { useAppState } from '@/hooks/useAppState'
import { Image } from 'expo-image'
import Play from '@/constants/icons/play'
import { AuthProvider } from '@/contexts/AuthContext'
import Logo from '@/components/logo/Logo'

function onAppStateChange(status: AppStateStatus) {
	// React Query already supports in web browser refetch on window focus by default
	if (Platform.OS !== 'web') {
		focusManager.setFocused(status === 'active')
	}
}

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 2 } },
})

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function App() {
	const [loaded] = useFonts({
		Bold: require('@/assets/fonts/SpaceGrotesk-Bold.ttf'),
		Light: require('@/assets/fonts/SpaceGrotesk-Light.ttf'),
		Medium: require('@/assets/fonts/SpaceGrotesk-Medium.ttf'),
		Regular: require('@/assets/fonts/SpaceGrotesk-Regular.ttf'),
		Semibold: require('@/assets/fonts/SpaceGrotesk-SemiBold.ttf'),
	})

	useOnlineManager()
	useAppState(onAppStateChange)

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Stack>
						<Stack.Screen
							name="index"
							options={{
								// headerLargeTitleShadowVisible: false,
								// headerShadowVisible: false,
								headerTitleAlign: 'center',
								headerStyle: {
									backgroundColor: colors.background,
								},
								headerTintColor: colors.foreground,
								headerTitleStyle: {
									fontFamily: 'Bold',
								},
								headerTitle: (props) => <Logo />,
							}}
						/>
						<Stack.Screen name="[id]" />
						<Stack.Screen
							name="[id]/login"
							options={{
								title: 'Login',
								headerTitleAlign: 'center',
								headerStyle: {
									backgroundColor: colors.background,
								},
								headerTintColor: colors.foreground,
								headerTitleStyle: {
									fontFamily: 'Bold',
								},
							}}
						/>
					</Stack>
				</AuthProvider>
			</QueryClientProvider>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 45,
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
})
