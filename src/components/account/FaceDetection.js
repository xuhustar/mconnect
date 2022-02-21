import React, { useCallback, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import toggleCameraImg from '../../assets/images/icons/toggle-camera.svg'
import { detectFaces } from '../../utils/faceApi'
import { Effect, Heading } from '../common'
import { Button } from '../elements'

export const FaceDetection = ({ onSetStep }) => {
	const webcamRef = useRef(null)
	const canvasRef = useRef(null)
	const focusOvanRef = useRef(null)

	const [results, setResults] = useState([])
	const [switchCamera, setSwitchCamera] = useState(true)
	const [faceFailure, setFaceFailure] = useState(true)
	const [faceSuccess, setFaceSuccess] = useState(false)
	const [percent, setPercent] = useState(0)

	const handleSetStepBack = () => {
		onSetStep(1)
	}

	const handleSwitchCamera = () => {
		setSwitchCamera(!switchCamera)
	}

	const getFaces = useCallback(async () => {
		if (webcamRef !== null) {
			const faces = await detectFaces(webcamRef, canvasRef)
			setResults(faces)
		}
	}, [])

	const clearOverlay = (canvas) => {
		if (canvas.current !== null) {
			canvas.current.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
		}
	}

	const handleFaceAgain = () => {
		setFaceFailure(true)
	}

	useEffect(() => {
		if (results && results.length > 0) {
			results.forEach((result) => {
				const {
					detection: {
						box: { top, left, right, bottom },
						imageWidth,
						imageHeight,
					},
					age,
				} = result

				const number = 30
				const focusOvanWidth = focusOvanRef.current.clientWidth
				const focusOvanHeight = focusOvanRef.current.clientHeight
				const webcamLeft = Math.ceil((imageWidth - focusOvanWidth) / 2) - number
				const webcamRight = webcamLeft + focusOvanWidth + number
				const webcamTop = Math.ceil((imageHeight - focusOvanHeight) / 2) - number
				const webcamBottom = webcamTop + focusOvanHeight + number

				if (
					left >= webcamLeft &&
					right <= webcamRight &&
					top >= webcamTop &&
					bottom <= webcamBottom &&
					age >= 18 &&
					faceFailure &&
					!faceSuccess
				) {
					setPercent((percent) => percent + 1)
				}
			})
		}
	}, [results, faceFailure, faceSuccess])

	useEffect(() => {
		let timeout = null
		if (faceFailure && faceSuccess && percent >= 100) {
			timeout = setTimeout(() => {
				onSetStep(3)
			}, 3000)
		}
		return () => clearTimeout(timeout)
	}, [onSetStep, faceFailure, percent, faceSuccess])

	useEffect(() => {
		let timeout = null
		if (faceFailure) {
			timeout = setTimeout(() => {
				setFaceFailure(false)
				setPercent(0)
			}, 60000)
		}
		return () => clearTimeout(timeout)
	}, [faceFailure])

	useEffect(() => {
		if (percent >= 100) {
			setPercent(100)
			setFaceSuccess(true)
		}
	}, [percent])

	useEffect(() => {
		let interval = null
		if (webcamRef !== null && !faceSuccess && faceFailure) {
			interval = setInterval(async () => {
				await getFaces()
			}, 80)
			return () => {
				clearInterval(interval)
				clearOverlay(canvasRef)
			}
		} else {
			return clearOverlay(canvasRef)
		}
	}, [getFaces, faceFailure, faceSuccess])

	return (
		<div className="face-detection">
			<div className="face-detection__head">
				<div className="container">
					<Heading onClick={handleSetStepBack}>
						{faceFailure ? (
							<h2 className="heading__title">
								<span>Vui lòng quét gương mặt</span> để xác nhận tuổi
							</h2>
						) : (
							<h2 className="heading__title">
								<span>Xác nhận không thành công,</span> hãy để mặt ở nền trơn hơn nhé!
							</h2>
						)}
					</Heading>
				</div>
			</div>
			<div className="focus">
				<div className="focus-box">
					<div className="focus-ovan" ref={focusOvanRef}></div>
				</div>
			</div>
			<Webcam
				className="webcam"
				audio={false}
				ref={webcamRef}
				videoConstraints={{ facingMode: switchCamera ? 'user' : 'environment' }}
				mirrored={false}
			/>
			<canvas className={faceFailure && !faceSuccess ? 'canvas' : 'canvas-hide'} ref={canvasRef} />
			{faceFailure ? (
				<>
					{!faceSuccess && (
						<button className="switch-webcam" onClick={handleSwitchCamera}>
							<Effect>
								<img src={toggleCameraImg} alt="" className="img" />
							</Effect>
						</button>
					)}
					<div className="percent">
						<div className="percent-number">{percent}%</div>
						<p className="percent-text">
							{percent === 100 ? 'Xác nhận thành công' : 'Đang xác nhận khuôn mặt'}
						</p>
						<div className="percent-process">
							<div className="percent-process-zero"></div>
							<div className="percent-process-hero" style={{ width: `${percent}%` }}></div>
						</div>
					</div>
				</>
			) : (
				<div className="btn-scan">
					<Button className="btn" onClick={handleFaceAgain}>
						<span className="btn__text">Quét lại</span>
					</Button>
				</div>
			)}
		</div>
	)
}
