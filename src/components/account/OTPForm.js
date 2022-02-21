import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { Heading } from '../common'
import { Button, Input } from '../elements'

export const OTPForm = ({ onSetStep }) => {
	const validationSchema = Yup.object().shape({
		otpCode1: Yup.string().required().max(1),
		otpCode2: Yup.string().required().max(1),
		otpCode3: Yup.string().required().max(1),
		otpCode4: Yup.string().required().max(1),
		otpCode5: Yup.string().required().max(1),
		otpCode6: Yup.string().required().max(1),
	})
	const formOptions = { resolver: yupResolver(validationSchema) }
	const { register, handleSubmit, formState, watch } = useForm(formOptions)
	const { errors } = formState

	const onSubmit = ({ otpCode1, otpCode2, otpCode3, otpCode4, otpCode5, otpCode6 }) => {
		console.log(otpCode1 + otpCode2 + otpCode3 + otpCode4 + otpCode5 + otpCode6)
	}

	return (
		<div className="referal-code">
			<div className="container">
				<div className="referal-code__head">
					<Heading>
						<h2 className="heading__title">Nhập mã xác thực</h2>
					</Heading>
				</div>
				<div className="referal-code__body">
					<p>
						Hãy nhập mã OTP từ tin nhắn <strong>090 999 9999</strong>
					</p>
					<form onSubmit={handleSubmit(onSubmit)} className="form form--referal-code">
						<div className="form__group">
							<Input
								type="number"
								name="otpCode1"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.otpCode1}
							/>
							<Input
								type="number"
								name="otpCode2"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.otpCode2}
							/>
							<Input
								type="number"
								name="otpCode3"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.otpCode3}
							/>
							<Input
								type="number"
								name="otpCode4"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.otpCode4}
							/>
							<Input
								type="number"
								name="otpCode5"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.otpCode5}
							/>
							<Input
								type="number"
								name="otpCode6"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.otpCode6}
							/>
						</div>
						<Button type="submit" className="btn">
							<span className="btn__text">Xác nhận</span>
						</Button>
					</form>
					<p>
						Bạn quên mã OTP?
						<Button className="btn btn--link">
							<span className="btn__text">Yêu cầu gửi lại OTP (30s).</span>
						</Button>
					</p>
				</div>
			</div>
		</div>
	)
}
