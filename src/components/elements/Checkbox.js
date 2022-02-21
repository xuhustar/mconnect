import React from 'react'

export const Checkbox = ({ name, placeholder, register, error }) => {
	return (
		<div className={`${error ? 'checkbox checkbox--invalid' : 'checkbox'}`}>
			<label className="checkbox__label" htmlFor={name || ''}>
				<input
					type="checkbox"
					name={name || ''}
					id={name || ''}
					className="checkbox__input"
					{...register(name || '')}
				/>
				<span className="checkbox__text" dangerouslySetInnerHTML={{ __html: placeholder || '' }} />
			</label>
		</div>
	)
}
