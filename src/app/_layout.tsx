import { useFonts } from 'expo-font'
import { Link, router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { colors } from '@/constants/token'
import { QueryClient, QueryClientProvider, focusManager } from '@tanstack/react-query'
import {
	AppStateStatus,
	Platform,
	TouchableOpacity,
} from 'react-native'
import { useOnlineManager } from '@/hooks/useOnlineManager'
import { useAppState } from '@/hooks/useAppState'
import { AuthProvider } from '@/contexts/AuthContext'
import Logo from '@/components/logo/Logo'
import { PlayerProvider } from '@/contexts/PlayerContext'
import { Image } from 'expo-image'

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
					<PlayerProvider>
						<Stack
							screenOptions={{
								headerLargeTitleShadowVisible: false,
								headerShadowVisible: false,
								headerTitleAlign: 'center',
								headerStyle: {
									backgroundColor: colors.background,
								},
								headerTintColor: colors.foreground,
								headerTitleStyle: {
									fontFamily: 'Bold',
								},
								headerBackTitleStyle: {fontFamily: "Bold"}
							}}
						>
							<Stack.Screen
								name="index"
								options={{
									title: "Home",
									headerTitle: () => (
										<TouchableOpacity activeOpacity={0.8} onPressIn={() => router.navigate('https://www.bestinrometours.com/')}>
											<Logo />
										</TouchableOpacity>
									),
								}}
							/>
							<Stack.Screen
								name="[id]/index"
								options={{
									title: 'Playlist',
									headerRight: () => (
										<TouchableOpacity activeOpacity={0.7} onPressIn={() => router.push('/user')}>
											<Image
												source={require('@/assets/icon.png')}
												style={{ width: 50, height: 50 }}
											/>
										</TouchableOpacity>
									),
								}}
							/>
							<Stack.Screen
								name="[id]/login"
								options={{
									title: 'Login',
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name="[id]/sign-up"
								options={{
									title: 'SignUp',
									headerShown: false,
								}}
							/>
							<Stack.Screen name="modal" options={{ headerShown: false, presentation: 'modal' }} />
							<Stack.Screen
								name="user"
								options={{
									title: 'Profile',
								}}
							/>
							<Stack.Screen name="terms" options={{ title: 'Terms & Conditions' }} />
							<Stack.Screen name="policy" options={{ title: 'Privacy Policy' }} />
						</Stack>
					</PlayerProvider>
				</AuthProvider>
			</QueryClientProvider>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}
