import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/actions'
import { Loader } from '../../components/shared'
import * as Yup from 'yup'
import { staticLinks } from '../../utils/staticLinks'
import { Button, Input } from '../elements'
import { Heading } from '../common'

export const LoginForm = () => {
	const { loading, error } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const validationSchema = Yup.object().shape({
		phone: Yup.string().required('Vui lòng nhập số điện thoại'),
		password: Yup.string().required('Vui lòng nhập mật khẩu'),
	})
	const formOptions = { resolver: yupResolver(validationSchema) }
	const { register, handleSubmit, formState, watch } = useForm(formOptions)
	const { errors } = formState

	const onSubmit = ({ phone, password }) => {
		const data = {
			phone,
			password,
			remember: true,
		}
		dispatch(login(data))
	}

	return (
		<div className="login">
			{loading && <Loader />}
			<div className="container">
				<div className="login__head">
					<Heading link={staticLinks.welcome.url}>
						<h2 className="heading__title">
							<span>Chào mừng bạn</span> đã quay trở lại
						</h2>
					</Heading>
				</div>
				<div className="login__body">
					<form onSubmit={handleSubmit(onSubmit)} className="form form--login">
						{error ? <p className="form__error">{error}</p> : ''}
						<Input
							type="number"
							name="phone"
							className="field__input"
							placeholder="Số điện thoại (ví dụ 0xx.xxx.xxxx)"
							register={register}
							watch={watch}
							error={errors.phone}
						/>
						<Input
							type="password"
							name="password"
							className="field__input"
							placeholder="Mật khẩu"
							register={register}
							watch={watch}
							error={errors.password}
						/>
						<div className="text-center">
							<Button className="btn" type="submit" withAnimation>
								<span className="btn__text">{staticLinks.login.label}</span>
							</Button>
						</div>
					</form>
				</div>
				<div className="login__foot">
					<p>
						Bạn chưa có tài khoản?{' '}
						<Link className="btn btn--link" to={staticLinks.register.url}>
							<span className="btn__text">Đăng ký ngay</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
