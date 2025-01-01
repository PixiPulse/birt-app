import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { colors } from '@/constants/token'
import { QueryClient, QueryClientProvider, focusManager } from '@tanstack/react-query'
import { AppStateStatus, Platform } from 'react-native'
import { useOnlineManager } from '@/hooks/useOnlineManager'
import { useAppState } from '@/hooks/useAppState'

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
				<Stack>
					<Stack.Screen
						name="index"
						options={{
							headerLargeTitleShadowVisible: false,
							headerShadowVisible: false,
							headerTitleAlign: 'center',
							title: 'Home',
							headerStyle: {
								backgroundColor: colors.background,
							},
							headerTintColor: colors.foreground,
							headerTitleStyle: {
								fontFamily: 'Bold',
							},
						}}
					/>
					<Stack.Screen name="[id]" />
				</Stack>
			</QueryClientProvider>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}
