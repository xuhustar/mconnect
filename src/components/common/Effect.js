import React, { useRef } from 'react'

export const Effect = ({ children, disabled }) => {
	const effectRef = useRef(null)

	const clickEffect = () => {
		if (!effectRef.current || disabled) return
		effectRef.current.classList.add('effect--animate')
		setTimeout(() => {
			if (effectRef.current) effectRef.current.classList.remove('effect--animate')
		}, 300)
	}

	return (
		<span ref={effectRef} className="effect" onClick={clickEffect}>
			{children}
		</span>
	)
}
