import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/styles/app.scss'
import { Header, Navbar, Navigation } from './components/common'
import {
	BackToMobile,
	BackToVertical,
	CookiePopup,
	ScrollToTop,
	Warning,
} from './components/shared'
import { useAuth } from './hooks/useAuth'
import { useDevice } from './hooks/useDetect'
import { LoginPage, RegisterPage } from './pages/auth'
import {
	EarnPointsPage,
	HomePage,
	LeaderBoardPage,
	MyVouchersPage,
	PostPage,
	ProfilePage,
	ReferFriendPage,
	ScanCodePage,
	VouchersPage,
} from './pages/private'
import {
	CookieSettingPage,
	FaqsPage,
	HotlinePage,
	MaintenancePage,
	NotFoundPage,
} from './pages/public'
import { WelcomePage } from './pages/welcome'
import { AuthRoute, PrivateRoute, PublicRoute, WelcomeRoute } from './routes'
import { getLocalStorage, setLocalStorage } from './utils/common'
import { staticLinks } from './utils/staticLinks'

const App = () => {
	const auth = useAuth()
	const { mobile, landscpae } = useDevice()
	const [displayNavbar, setDisplayNavbar] = useState(false)

	const openNavbar = () => {
		setDisplayNavbar(true)
	}

	const closeNavbar = () => {
		setDisplayNavbar(false)
	}

	useEffect(() => {
		if (!getLocalStorage('cookiePerformance')) {
			setLocalStorage('cookiePerformance', true)
		}
		if (!getLocalStorage('cookieMarketing')) {
			setLocalStorage('cookieMarketing', true)
		}
	}, [])

	if (!mobile) return <BackToMobile />
	if (mobile && landscpae) return <BackToVertical />

	return (
		<div className="app">
			<Header onOpenNavbar={openNavbar} />
			{auth.userInfo && <Navbar displayNavbar={displayNavbar} onCloseNavbar={closeNavbar} />}
			<ScrollToTop>
				<Routes>
					<Route element={<WelcomeRoute />}>
						<Route path={staticLinks.welcome.url} element={<WelcomePage />} />
					</Route>
					<Route element={<AuthRoute />}>
						<Route path={staticLinks.login.url} element={<LoginPage />} />
						<Route path={staticLinks.register.url} element={<RegisterPage />} />
					</Route>
					<Route element={<PublicRoute />}>
						<Route path={staticLinks.cookieSetting.url} element={<CookieSettingPage />} />
						<Route path={staticLinks.hotline.url} element={<HotlinePage />} />
						<Route path={staticLinks.faqs.url} element={<FaqsPage />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path={staticLinks.home.url} element={<HomePage />} />
						<Route path={staticLinks.vouchers.url} element={<VouchersPage />} />
						<Route path={staticLinks.myVouchers.url} element={<MyVouchersPage />} />
						<Route path={staticLinks.post.url} element={<PostPage />} />
						<Route path={staticLinks.leaderBoard.url} element={<LeaderBoardPage />} />
						<Route path={staticLinks.earnPoints.url} element={<EarnPointsPage />} />
						<Route path={staticLinks.profile.url} element={<ProfilePage />} />
						<Route path={staticLinks.referFriend.url} element={<ReferFriendPage />} />
						<Route path={staticLinks.scanCode.url} element={<ScanCodePage />} />
					</Route>
					{auth.isMaintenance && (
						<Route path={staticLinks.maintenance.url} element={<MaintenancePage />} />
					)}
					<Route path={staticLinks.notFound.url} element={<NotFoundPage />} />
				</Routes>
				{auth.userInfo && <Navigation onCloseNavbar={closeNavbar} />}
				{!auth.cookieConsent && (
					<>
						<Warning />
						<CookiePopup />
					</>
				)}
			</ScrollToTop>
		</div>
	)
}

export default App
