import React from 'react'
import { useNavigate } from 'react-router-dom'
import faceOneImg from '../../assets/images/icons/face-one.svg'
import noGlass from '../../assets/images/icons/no-glass.svg'
import sunsetImg from '../../assets/images/icons/sunset.svg'
import webcamImg from '../../assets/images/webcam.png'
import { Heading } from '../common'
import { Button } from '../elements'

export const FaceGuide = ({ onSetStep }) => {
	const navigate = useNavigate()

	const handleChangeStep = () => {
		onSetStep(2)
	}

	return (
		<div className="face-guide">
			<div className="face-guide__head">
				<div className="container">
					<Heading onClick={() => navigate(-1)}>
						<h2 className="heading__title">
							<span>Vui lòng quét gương mặt</span> để xác nhận tuổi
						</h2>
					</Heading>
				</div>
			</div>
			<div className="face-guide__body">
				<img src={webcamImg} alt="" className="img" />
			</div>
			<div className="face-guide-foot">
				<div className="container">
					<ul className="face-note">
						<li className="face-note-item">
							<img src={sunsetImg} alt="" className="img" />
							<p>
								Rõ nét <span>và đủ sáng</span>
							</p>
						</li>
						<li className="face-note-item">
							<img src={faceOneImg} alt="" className="img" />
							<p>
								Chỉ có 01 <span>gương mặt</span>
							</p>
						</li>
						<li className="face-note-item">
							<img src={noGlass} alt="" className="img" />
							<p>
								Không <span>đeo kính</span>
							</p>
						</li>
					</ul>
					<Button className="btn" withAnimation onClick={handleChangeStep}>
						<span className="btn__text">Bắt đầu quét</span>
					</Button>
				</div>
			</div>
		</div>
	)
}
