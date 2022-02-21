import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { staticLinks } from '../utils/staticLinks'

export const AuthRoute = () => {
	const auth = useAuth()

	if (auth.isMaintenance) return <Navigate to={staticLinks.maintenance.url} />
	if (!auth.ageConfirm) return <Navigate to={staticLinks.welcome.url} />
	if (auth.userInfo) return <Navigate to={staticLinks.home.url} />

	return <Outlet />
}
