import React from 'react'

export const Input = ({ className, type, name, placeholder, register, watch, error }) => {
	return (
		<div
			className={`${error ? 'field field--invalid' : watch(name) ? 'field field--valid' : 'field'}`}
		>
			<div className="field__control">
				{type === 'number' ? (
					<input
						type={type || 'text'}
						name={name || ''}
						className="field__input"
						placeholder={placeholder || ''}
						inputMode="numeric"
						pattern="[0-9]*"
						{...register(name)}
					/>
				) : (
					<input
						type={type || 'text'}
						name={name || ''}
						className="field__input"
						placeholder={placeholder || ''}
						{...register(name)}
					/>
				)}
			</div>
			<span className="field__error">{error?.message}</span>
		</div>
	)
}
