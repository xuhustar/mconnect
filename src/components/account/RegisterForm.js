import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { Loader } from '../../components/shared'
import { checkUserRegisterExists } from '../../redux/actions'
import brands from '../../utils/brands'
import locations from '../../utils/locations'
import { staticLinks } from '../../utils/staticLinks'
import { Heading } from '../common'
import { Button, Checkbox, Input, Select } from '../elements'

export const RegisterForm = ({ onSetStep }) => {
	const dispatch = useDispatch()
	const { loading, error, userRegister } = useSelector((state) => state.user)

	const validationSchema = Yup.object().shape({
		fullname: Yup.string().required('Vui lòng nhập họ tên'),
		phone: Yup.string().required('Vui lòng nhập số điện thoại'),
		brand: Yup.string().required('Vui lòng chọn nhãn hiệu'),
		location: Yup.string().required('Vui lòng chọn khu vực'),
		password: Yup.string().required('Vui lòng nhập mật khẩu'),
		confirmPassword: Yup.string()
			.required('Vui lòng nhập xác nhận mật khẩu')
			.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		email: Yup.string().email('Vui lòng nhập đúng định dạng email'),
		agreeInfo: Yup.bool().oneOf([true], 'Vui lòng chọn đồng ý'),
		agreeTerms: Yup.bool().oneOf([true], 'Vui lòng chọn đồng ý'),
	})
	const formOptions = { resolver: yupResolver(validationSchema) }
	const { register, handleSubmit, formState, watch, setValue } = useForm(formOptions)
	const { errors } = formState

	const onSubmit = ({
		fullname,
		phone,
		brand,
		location,
		password,
		confirmPassword,
		email,
		agreeInfo,
		agreeTerms,
	}) => {
		const data = {
			fullname,
			phone,
			brand,
			location,
			password,
			confirmPassword,
			email,
			agreeInfo,
			agreeTerms,
		}
		console.log(data)
		dispatch(checkUserRegisterExists(data, onSetStep))
	}

	useEffect(() => {
		if (userRegister) {
			for (let [key, value] of Object.entries(userRegister)) {
				setValue(key, value)
			}
		}
	}, [userRegister, setValue])

	return (
		<div className="register">
			{loading && <Loader />}
			<div className="container">
				<Heading onClick={() => onSetStep(2)}>
					<h2 className="heading__title">
						<span>Cùng nhau</span> đăng ký thông tin nào
					</h2>
				</Heading>
				<div className="register__body">
					<form onSubmit={handleSubmit(onSubmit)} className="form form-register">
						{error ? <p className="form__error">{error}</p> : ''}

						<Input
							type="text"
							name="fullname"
							placeholder="Họ và tên"
							register={register}
							watch={watch}
							error={errors.fullname}
						/>

						<Input
							type="number"
							name="phone"
							placeholder="Số điện thoại (ví dụ 0xx.xxx.xxxx)"
							register={register}
							watch={watch}
							error={errors.phone}
						/>

						<Select
							name="brand"
							placeholder="Nhãn hiệu bạn đang sử dụng"
							register={register}
							watch={watch}
							error={errors.brand}
							options={brands}
							val={userRegister?.brand}
						/>

						<Select
							name="location"
							placeholder="Chọn khu vực"
							register={register}
							watch={watch}
							error={errors.location}
							options={locations}
							val={userRegister?.location}
						/>

						<Input
							type="password"
							name="password"
							placeholder="Mật khẩu"
							register={register}
							watch={watch}
							error={errors.password}
						/>

						<Input
							type="password"
							name="confirmPassword"
							placeholder="Xác nhận mật khẩu"
							register={register}
							watch={watch}
							error={errors.confirmPassword}
						/>

						<Input
							type="text"
							name="email"
							placeholder="Địa chỉ email (không bắt buộc)"
							register={register}
							watch={watch}
							error={errors.email}
						/>

						<Checkbox
							name="agreeInfo"
							placeholder="Tôi đồng ý cho phép xử lý thông tin cá nhân của tôi cho mục đích liên lạc và gửi
							thông tin cho tôi."
							register={register}
							watch={watch}
							error={errors.agreeInfo}
						/>

						<Checkbox
							name="agreeTerms"
							placeholder="<span>Tôi đồng ý với <a href='/policy'>Điều Khoản &amp; Điều Kiện</a> của chương trình.</span>"
							register={register}
							watch={watch}
							error={errors.agreeTerms}
						/>

						<div className="text-center">
							<Button className="btn" type="submit" withAnimation>
								<span className="btn__text">{staticLinks.register.label}</span>
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
