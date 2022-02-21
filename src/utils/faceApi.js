import * as faceapi from 'face-api.js'

export const loadModels = () => {
	const MODEL_URL = `${process.env.PUBLIC_URL}/models`

	return Promise.all([
		faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
		faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
		faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
		faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
		faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
	])
}

export const detectFaces = async (webcamRef, canvasRef) => {
	if (webcamRef && canvasRef) {
		const canvas = canvasRef.current
		const webcam = webcamRef.current.video
		const imgSize = webcam.getBoundingClientRect()
		const displaySize = { width: imgSize.width, height: imgSize.height }
		if (displaySize.height === 0) {
			return
		}

		const faces = await faceapi
			.detectAllFaces(webcam, new faceapi.TinyFaceDetectorOptions({ inputSize: 160 }))
			.withFaceLandmarks()
			.withFaceExpressions()
			.withAgeAndGender()

		const resizedDetections = faceapi.resizeResults(faces, displaySize)

		faceapi.resizeResults(faces, displaySize)
		faceapi.matchDimensions(canvas, displaySize)
		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
		faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)

		return resizedDetections
	}
	return []
}
