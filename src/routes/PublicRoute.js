import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components/common'
import { useAuth } from '../hooks/useAuth'
import { staticLinks } from '../utils/staticLinks'

export const PublicRoute = () => {
	const auth = useAuth()

	if (auth.isMaintenance) return <Navigate to={staticLinks.maintenance.url} />

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
