import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack screenOptions={{headerShown: false}}>
			<Stack.Screen name="(home)" />
			<Stack.Screen name="(auth)" />
		</Stack>
	)
}
