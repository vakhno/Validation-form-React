import React from 'react'
import PropTypes from 'prop-types'
import './LabelInput.sass'

const LabelInput = ({ customStyle, inputStyle, label, name, type, placeholder, onChange, value, id }) => {
	return (
		<>
			<label htmlFor={name} className='input__default-label'>{label}</label>
			<input className={`input ${customStyle} ${inputStyle}`} id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} />
		</>
	)
}

LabelInput.propTypes = {
	customStyle: PropTypes.string,
	inputStyle: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string
}

LabelInput.defaultProps = {
	inputStyle: 'input__default',
	onChange: () => { },
	type: 'text',
	label: '',
	placeholder: '',
	value: '',
}

export default LabelInput