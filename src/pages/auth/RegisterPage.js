import React, { useEffect, useState } from 'react'
import {
	FaceDetection,
	FaceGuide,
	OTPAgreePhone,
	OTPForm,
	ReferalCode,
	RegisterForm,
} from '../../components/account'
import { loadModels } from '../../utils/faceApi'

export const RegisterPage = () => {
	const [step, setStep] = useState(1)

	useEffect(() => {
		loadModels()
	}, [])

	return (
		<main className="main auth">
			{step === 1 && <FaceGuide onSetStep={setStep} />}
			{step === 2 && <FaceDetection onSetStep={setStep} />}
			{step === 3 && <RegisterForm onSetStep={setStep} />}
			{step === 4 && <ReferalCode onSetStep={setStep} />}
			{step === 5 && <OTPAgreePhone onSetStep={setStep} />}
			{step === 6 && <OTPForm />}
		</main>
	)
}
