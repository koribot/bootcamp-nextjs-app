'use client'

import React from 'react'
import '@/styles/components/login_logout.scss'
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { signIn } from "next-auth/react"

const Login_Logout = () => {
	const { data: session } = useSession()

	const handleEvent = () => {
		session !== null
			? signOut()
			: signIn()
	}
	return (
		<button className='login-logout' onClick={(handleEvent)}> {session?.user.name ? 'Logout' : 'Login'}</button>
	)
}

export default Login_Logout