import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { createContext, useContext, useEffect, useState } from 'react'

interface AuthProps {
	authState?: { token: string | null; authenticated: boolean | null }
	onLogin?: (username: string, password: string) => Promise<any>
	onLogout?: () => Promise<any>
	isLoading?: boolean
}

const TOKEN_KEY = 'jwt'
export const API_URL = 'http://167.172.59.31:5001'
const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
	const [authState, setAuthState] = useState<{
		token: string | null
		authenticated: boolean | null
	}>({
		token: null,
		authenticated: null,
	})
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const loadToken = async () => {
			setIsLoading(true)
			const token = await SecureStore.getItemAsync(TOKEN_KEY)

			if (token) {
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
				setAuthState({
					token: token,
					authenticated: true,
				})
			} else {
				setAuthState({
					token: null,
					authenticated: false,
				})
			}

			setIsLoading(false)
		}

		loadToken()
	}, [])

	const login = async (username: string, password: string) => {
		try {
			const result = await axios.post(`${API_URL}/api/v1/login/user`, { username, password })
			setAuthState({
				token: result.data.accessToken,
				authenticated: true,
			})

			// set axios header
			axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`

			// store token
			await SecureStore.setItemAsync(TOKEN_KEY, result.data.accessToken)


			return {data: result.data}
		} catch (error: any) {
			return { error: true, message: (error as any).response.data }
		}
	}

	const logout = async () => {
		await SecureStore.deleteItemAsync(TOKEN_KEY)

		axios.defaults.headers.common['Authorization'] = ''

		setAuthState({
			token: null,
			authenticated: false,
		})
	}

	const value = {
		onLogin: login,
		onLogout: logout,
		authState,
		isLoading,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
