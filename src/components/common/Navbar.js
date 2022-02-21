import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions'
import avatar from '../../assets/images/avatar.png'
import { setBodyNoScroll } from '../../utils/common'
import { Button } from '../elements'

export const Navbar = ({ displayNavbar, onCloseNavbar }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logout(navigate))
		onCloseNavbar()
	}

	useEffect(() => {
		if (displayNavbar) {
			setBodyNoScroll(true)
		} else {
			setBodyNoScroll(false)
		}
	}, [displayNavbar])

	return (
		<div className={`navbar ${displayNavbar ? 'is-show' : ''}`}>
			<div className="navbar-main">
				<div className="navbar-body">
					<Button className="navbar-close" onClick={() => onCloseNavbar()} withAnimation>
						<span className="navbar-close-icon"></span>
					</Button>
					<div className="user">
						<div className="user-avatar">
							<img src={avatar} alt="" className="img" />
						</div>
						<div className="user-fullname">Nguyen Thanh Liem</div>
						<div className="user-hang">Hội viên đồng</div>
					</div>
					<ul className="nav">
						<li className="nav-item">
							<NavLink
								to="/my-vouchers"
								className={({ active }) => (active ? 'nav-link is-active' : 'nav-link')}
								onClick={() => onCloseNavbar()}
							>
								Ưu đãi đã đổi
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/leader-board"
								className={({ active }) => (active ? 'nav-link is-active' : 'nav-link')}
								onClick={() => onCloseNavbar()}
							>
								Bảng xếp hạng
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/faqs"
								className={({ active }) => (active ? 'nav-link is-active' : 'nav-link')}
								onClick={() => onCloseNavbar()}
							>
								FAQs
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/hotline"
								className={({ active }) => (active ? 'nav-link is-active' : 'nav-link')}
								onClick={() => onCloseNavbar()}
							>
								Hotline
							</NavLink>
						</li>
						<li className="nav-item">
							<button className="nav-link" onClick={handleLogout}>
								Đăng xuất
							</button>
						</li>
					</ul>
					<p>
						CN CT TNHH Vinataba - Phillip Morris tại TP.HCM Bảo Lưu Mọi Quyền &copy; Copyright 2022
					</p>
				</div>
			</div>
		</div>
	)
}
