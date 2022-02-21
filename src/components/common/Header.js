import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Effect } from '.'
import notificationIcon from '../../assets/images/icons/notification.svg'
import logoImg from '../../assets/images/logo.svg'
import { useAuth } from '../../hooks/useAuth'
import { staticLinks } from '../../utils/staticLinks'
import { Button } from '../elements'

export const Header = ({ onOpenNavbar }) => {
	const auth = useAuth()
	const header = useRef(null)

	const stickyHandle = () => {
		window.addEventListener('scroll', () => {
			if (header.current) {
				if (window.scrollY > 10) {
					header.current.classList.add('is-sticky')
				} else {
					header.current.classList.remove('is-sticky')
				}
			}
		})
	}

	useEffect(() => {
		stickyHandle()
	}, [])

	return (
		<div className="header" ref={header}>
			{auth.userInfo && (
				<>
					<Button className="burger" onClick={() => onOpenNavbar()} withAnimation>
						<span className="burger-icon">Toggle</span>
					</Button>
					<Button className="notification is-bullet" withAnimation>
						<img src={notificationIcon} alt="" className="img" />
					</Button>
				</>
			)}
			<Link to={staticLinks.home.url} className="logo">
				<Effect>
					<img className="img" src={logoImg} alt="" />
				</Effect>
			</Link>
		</div>
	)
}
