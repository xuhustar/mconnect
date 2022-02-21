import React from 'react'
import { Link } from 'react-router-dom'
import { staticLinks } from '../../utils/staticLinks'

export const NotFoundPage = () => {
	return (
		<main className="main not-found">
			<div className="container">
				<p>404 - Không tìm thấy trang</p>
				<Link className="btn" to={staticLinks.home.url}>
					{staticLinks.home.label}
				</Link>
			</div>
		</main>
	)
}
