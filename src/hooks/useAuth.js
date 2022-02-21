import { useSelector } from 'react-redux'

export const useAuth = () => {
	const isMaintenance = false
	const { ageConfirm, userInfo } = useSelector((state) => state.user)
	const { cookieConsent } = useSelector((state) => state.cookie)

	return {
		ageConfirm,
		userInfo,
		isMaintenance,
		cookieConsent,
	}
}
