import React from 'react'
import { NavLink } from 'react-router-dom'
import { Effect } from '.'
import { staticLinks } from '../../utils/staticLinks'

export const Navigation = ({ onCloseNavbar }) => {
	return (
		<div className="navigation">
			<ul className="menu">
				<li className="menu-item">
					<Effect>
						<NavLink
							to={staticLinks.home.url}
							className={({ isActive }) => (isActive ? 'menu-link is-active' : 'menu-link')}
							onClick={() => onCloseNavbar()}
						>
							<span className="menu-icon">
								<i className="icon icon-home"></i>
							</span>
							<span className="menu-text">{staticLinks.home.label}</span>
						</NavLink>
					</Effect>
				</li>
				<li className="menu-item">
					<Effect>
						<NavLink
							to={staticLinks.vouchers.url}
							className={({ isActive }) => (isActive ? 'menu-link is-active' : 'menu-link')}
							onClick={() => onCloseNavbar()}
						>
							<span className="menu-icon">
								<i className="icon icon-promotion"></i>
							</span>
							<span className="menu-text">Ưu đãi</span>
						</NavLink>
					</Effect>
				</li>
				<li className="menu-item">
					<Effect>
						<NavLink
							to="/scan-code"
							className={({ isActive }) => (isActive ? 'menu-link is-active' : 'menu-link')}
							onClick={() => onCloseNavbar()}
						>
							<span className="menu-icon">
								<i className="icon icon-scan-code"></i>
							</span>
							<span className="menu-text">Quét mã</span>
						</NavLink>
					</Effect>
				</li>
				<li className="menu-item">
					<Effect>
						<NavLink
							to="/earn-points"
							className={({ isActive }) => (isActive ? 'menu-link is-active' : 'menu-link')}
							onClick={() => onCloseNavbar()}
						>
							<span className="menu-icon">
								<i className="icon icon-earn-point"></i>
							</span>
							<span className="menu-text">Thêm điểm</span>
						</NavLink>
					</Effect>
				</li>
				<li className="menu-item">
					<Effect>
						<NavLink
							to="/profile"
							className={({ isActive }) => (isActive ? 'menu-link is-active' : 'menu-link')}
							onClick={() => onCloseNavbar()}
						>
							<span className="menu-icon">
								<i className="icon icon-user"></i>
							</span>
							<span className="menu-text">Cá nhân</span>
						</NavLink>
					</Effect>
				</li>
			</ul>
		</div>
	)
}
