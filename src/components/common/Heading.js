import React from 'react'
import { Link } from 'react-router-dom'
import { Effect } from '.'
import { Button } from '../elements'

export const Heading = ({ children, link, onClick }) => {
	return (
		<div className="heading">
			{link ? (
				<Link className="heading__back" to={link || '/'}>
					<Effect>Back</Effect>
				</Link>
			) : (
				onClick && (
					<Button className="heading__back" withAnimation onClick={onClick}>
						Back
					</Button>
				)
			)}
			{children}
		</div>
	)
}
