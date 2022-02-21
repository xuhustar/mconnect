import React from 'react'
import { Heading } from '../common'
import { Button, Input } from '../elements'

export const OTPAgreePhone = ({ onSetStep }) => {
	return (
		<div className="referal-code">
			<div className="container">
				<div className="referal-code__head">
					<Heading>
						<h2 className="heading__title">Xác thực số điện thoại</h2>
					</Heading>
				</div>
				<div className="referal-code__body">
					<p>
						Chỉ còn 1 bước nữa thôi. Hãy kiểm tra số điện thoại vừa nhập để nhận mã OTP qua tin nhắn
					</p>
					<p>
						<strong>090 999 9999</strong>
						<Button className="btn btn--link" onClick={() => onSetStep(3)}>
							Thay đổi số điện thoại?
						</Button>
					</p>
					<Button type="submit" className="btn" onClick={() => onSetStep(6)}>
						<span className="btn__text">Lấy mã OTP</span>
					</Button>
				</div>
			</div>
		</div>
	)
}
