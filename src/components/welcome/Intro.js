import React from 'react'
import { Link } from 'react-router-dom'
import introImg from '../../assets/images/intro.png'
import { staticLinks } from '../../utils/staticLinks'

export const Intro = () => {
	return (
		<div className="intro">
			<img src={introImg} alt="" className="img" />
			<div className="intro__body">
				<div className="container">
					<p>
						Chào mừng bạn đến với M:Connect, nơi bạn không "thoả hiệp" với cuộc sống nhàm chán, nơi
						khám phá những giá trị của bản thân, nơi bạn phiêu trọn trong đam mê để chinh phục những
						chiến tích xứng đáng.
					</p>
					<Link className="btn" to={staticLinks.register.url}>
						<span className="btn__text">Sẵn sàng đăng ký</span>
					</Link>
					<p>
						Đã là thành viên? <Link to={staticLinks.login.url}>Đăng nhập ngay</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
