import { useState, useEffect } from 'react'
import { isMobile, isTablet, isDesktop, isLandscape } from '../utils/common'

export const useDevice = () => {
	const [mobile, setMobile] = useState(() => isMobile())
	const [tablet, setTablet] = useState(() => isTablet())
	const [desktop, setDesktop] = useState(() => isDesktop())
	const [landscpae, setLandscape] = useState(() => isLandscape())

	useEffect(() => {
		let timeOut
		const handleWindowSizeChange = () => {
			clearTimeout(timeOut)
			timeOut = setTimeout(() => {
				setMobile(isMobile())
				setTablet(isTablet())
				setDesktop(isDesktop())
				setLandscape(isLandscape())
			}, 150)
		}
		window.addEventListener('resize', handleWindowSizeChange)
		return () => window.removeEventListener('resize', handleWindowSizeChange)
	}, [])

	return {
		mobile,
		tablet,
		desktop,
		landscpae,
	}
}
