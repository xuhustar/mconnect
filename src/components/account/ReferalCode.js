import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { Heading } from '../common'
import { Button, Input } from '../elements'

export const ReferalCode = ({ onSetStep }) => {
	const validationSchema = Yup.object().shape({
		referalCode1: Yup.string().required().max(1),
		referalCode2: Yup.string().required().max(1),
		referalCode3: Yup.string().required().max(1),
		referalCode4: Yup.string().required().max(1),
		referalCode5: Yup.string().required().max(1),
		referalCode6: Yup.string().required().max(1),
	})
	const formOptions = { resolver: yupResolver(validationSchema) }
	const { register, handleSubmit, formState, watch } = useForm(formOptions)
	const { errors } = formState

	const onSubmit = ({
		referalCode1,
		referalCode2,
		referalCode3,
		referalCode4,
		referalCode5,
		referalCode6,
	}) => {
		console.log(
			referalCode1 + referalCode2 + referalCode3 + referalCode4 + referalCode5 + referalCode6
		)
	}

	return (
		<div className="referal-code">
			<div className="container">
				<div className="referal-code__head">
					<Heading>
						<h2 className="heading__title">
							<span>Đậm tình chiến hữu</span> khi nhập mã từ bạn bè
						</h2>
					</Heading>
				</div>
				<div className="referal-code__body">
					<p>Bạn hãy nhập mã giới thiệu của chiến hữu để có thể thăng hạng.</p>
					<form onSubmit={handleSubmit(onSubmit)} className="form form--referal-code">
						<div className="form__group">
							<Input
								type="number"
								name="referalCode1"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.referalCode1}
							/>
							<Input
								type="number"
								name="referalCode2"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.referalCode2}
							/>
							<Input
								type="number"
								name="referalCode3"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.referalCode3}
							/>
							<Input
								type="number"
								name="referalCode4"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.referalCode4}
							/>
							<Input
								type="number"
								name="referalCode5"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.referalCode5}
							/>
							<Input
								type="number"
								name="referalCode6"
								placeholder="_"
								register={register}
								watch={watch}
								error={errors.referalCode6}
							/>
						</div>
						<Button type="submit" className="btn">
							<span className="btn__text">Xác nhận</span>
						</Button>
					</form>
					<p>
						Bạn chưa có mã bạn bè?{' '}
						<Button className="btn btn--link" onClick={() => onSetStep(5)}>
							<span className="btn__text">Bỏ qua</span>
						</Button>
					</p>
				</div>
			</div>
		</div>
	)
}
