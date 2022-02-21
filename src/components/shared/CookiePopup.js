import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCookieConsent } from '../../redux/actions'
import { staticLinks } from '../../utils/staticLinks'
import { Button } from '../elements'

export const CookiePopup = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<div className="cookie-popup">
			<div className="cookie-popup__main">
				<div className="cookie-popup__body">
					<h3 className="cookie-popup__title">
						Lựa chọn của bạn liên quan đến cookie trên M:Connect.
					</h3>
					<div className="cookie-popup__content">
						<p>
							Chúng tôi sử dụng cookie để tối ưu hóa chức năng của trang và mang đến cho bạn trải
							nghiệm tốt nhất. Tìm hiểu thêm tại{' '}
							<a href="/cookie">
								<strong>Thông báo Cookie</strong>
							</a>{' '}
							và{' '}
							<a href="/policy">
								<strong>Thông báo Bảo Mật</strong>
							</a>
						</p>
					</div>
					<div className="cookie-popup__link">
						<Button
							className="btn"
							type="button"
							onClick={() => dispatch(setCookieConsent(true))}
							withAnimation
						>
							<span className="btn__text">Chấp nhận</span>
						</Button>
						<Button
							className="btn btn--link"
							onClick={() => {
								dispatch(setCookieConsent(true))
								navigate(staticLinks.cookieSetting.url)
							}}
							withAnimation
						>
							<span className="btn__text">Lựa chọn cookie</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
