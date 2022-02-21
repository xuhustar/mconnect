import React, { useRef } from 'react'

export const Button = ({ children, type, className, disabled, onClick, withAnimation }) => {
	const buttonRef = useRef(null)

	const clickEffect = (e) => {
		if (!buttonRef.current || disabled) return
		buttonRef.current.classList.add('btn--animate')
		setTimeout(() => {
			if (buttonRef.current) buttonRef.current.classList.remove('btn--animate')
			if (onClick) onClick(e)
		}, 300)
	}

	return (
		<button
			ref={buttonRef}
			type={type || 'button'}
			className={className || ''}
			onClick={withAnimation ? clickEffect : onClick}
		>
			{children}
		</button>
	)
}
