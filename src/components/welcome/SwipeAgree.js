import React, { useCallback, useEffect, useRef, useState } from 'react'

let startX = 0
let lockLeft = 0

export const SwipeAgree = ({ onSuccess }) => {
	const container = useRef(null)
	const lock = useRef(null)
	const lineSwipe = useRef()
	const [isDrag, setIsDrag] = useState(false)
	const [isUnlocked, setIsUnlocked] = useState(false)

	const onResize = useCallback(() => {
		window.addEventListener('resize', () => {
			if (isUnlocked) {
				lockLeft = getContainerWidth()
				lock.current.style.left = lockLeft + 'px'
			}
			if (lineSwipe.current) {
				lineSwipe.current.style.width = getContainerWidth() + 'px'
			}
		})
	}, [isUnlocked])

	const getContainerWidth = () => {
		return container.current.clientWidth - 50
	}

	const updatelockStyle = useCallback(() => {
		if (isUnlocked) return
		if (lock.current) {
			lock.current.style.left = lockLeft + 'px'
		}
		if (lineSwipe.current) {
			lineSwipe.current.style.width = getContainerWidth() - lockLeft + 'px'
		}
	}, [isUnlocked])

	const startDrag = (e) => {
		if (!isDrag) {
			setIsDrag(true)
			if (e.type === 'mousemove') {
				startX = e.clientX
			}

			if (e.type === 'touchmove') {
				startX = e.touches[0].clientX
			}
		}
	}

	const onDrag = useCallback(
		(e) => {
			if (isDrag) {
				if (e.type === 'mousemove') {
					lockLeft = Math.min(Math.max(0, e.clientX - startX - 75), getContainerWidth())
				}

				if (e.type === 'touchmove') {
					lockLeft = Math.min(Math.max(0, e.touches[0].clientX - startX - 75), getContainerWidth())
				}
				updatelockStyle()
			}
		},
		[isDrag, updatelockStyle]
	)

	const stopDrag = useCallback(() => {
		if (isUnlocked) return
		if (isDrag) {
			setIsDrag(false)
			if (lockLeft >= getContainerWidth()) {
				lockLeft = getContainerWidth()
				if (onSuccess) {
					onSuccess()
					setIsUnlocked(true)
				}
			} else {
				lockLeft = 0
			}
			updatelockStyle()
		}
	}, [isDrag, isUnlocked, onSuccess, updatelockStyle])

	useEffect(() => {
		onResize()
	}, [onResize])

	return (
		<div className="swipe-agree">
			<div className="container">
				<h3 className="swipe-agree-title">H??nh tr??nh ch??? d??nh cho th??nh vi??n t??? 22 tu???i</h3>
				<div className="swipe-agree-body">
					<div
						className="swipe-agree-slider"
						onMouseMove={onDrag}
						onMouseUp={stopDrag}
						onTouchMove={onDrag}
						onTouchEnd={stopDrag}
						ref={container}
					>
						<div
							className="swipe-agree-lock"
							onMouseDown={startDrag}
							onTouchStart={startDrag}
							ref={lock}
						></div>
						<div className="swipe-agree-line" ref={lineSwipe}></div>
						<div className="swipe-agree-text">X??c nh???n</div>
					</div>
				</div>
				<p className="swipe-agree-desc">
					Khi ??am m?? l??n ti???ng l?? l??c b???n l??n ???????ng kh??m ph?? v?? t??? do quy???t ?????nh nh???ng th??nh t??ch
					m??nh s??? c??.
				</p>
			</div>
		</div>
	)
}
