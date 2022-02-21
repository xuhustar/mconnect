import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SwipeAgree } from '.'
import welcomeImg from '../../assets/images/welcome.png'
import { setAgeConfirm } from '../../redux/actions/userAction'

export const AgeGate = ({ onSetStep }) => {
	const dispatch = useDispatch()
	const { ageConfirm } = useSelector((state) => state.user)

	const handleChangeStep = () => {
		dispatch(setAgeConfirm(true))
		onSetStep(2)
	}

	useEffect(() => {
		if (ageConfirm) {
			onSetStep(2)
		}
	}, [ageConfirm, onSetStep])

	return (
		<div className="age-gate">
			<img src={welcomeImg} alt="" className="img" />
			<div className="age-gate__body">
				<p className="age-gate__desc">Mọi cuộc phiêu lưu cần anh tài chinh phục</p>
				<SwipeAgree onSuccess={handleChangeStep} />
			</div>
		</div>
	)
}
