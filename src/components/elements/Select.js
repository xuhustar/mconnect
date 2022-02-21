import React, { useEffect, useState } from 'react'

export const Select = ({ name, placeholder, options, register, watch, error, val }) => {
	const [value, setValue] = useState(placeholder || '')

	const handleChange = (e) => {
		register(name).onChange(e)
		if (e.target.value) {
			setValue(e.target.value)
		} else {
			setValue(placeholder || '')
		}
	}

	useEffect(() => {
		if (val) {
			setValue(val)
		}
	}, [val])
	return (
		<div
			className={`${
				error ? 'select select--invalid' : watch(name) ? 'select select--valid' : 'select'
			}`}
		>
			<div className="select__control">
				<span className="select__label">{value}</span>
				<select
					name={name || ''}
					className="select__choose"
					{...register(name)}
					onChange={handleChange}
				>
					<option value="">{placeholder || ''}</option>
					{options &&
						options.map((option, index) => (
							<option value={option.value} key={index}>
								{option.label}
							</option>
						))}
				</select>
			</div>
			<span className="select__error">{error?.message}</span>
		</div>
	)
}
