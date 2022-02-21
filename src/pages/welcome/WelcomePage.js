import React, { useState } from 'react'
import { AgeGate, Intro } from '../../components/welcome'

export const WelcomePage = () => {
	const [step, setStep] = useState(1)

	return (
		<main className="main welcome">
			{step === 1 && <AgeGate onSetStep={setStep} />}
			{step === 2 && <Intro onSetStep={setStep} />}
		</main>
	)
}
