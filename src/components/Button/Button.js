import React from 'react'
import PropTypes from 'prop-types'
import './Button.sass'

const Button = ({ children, onClick, customStyle, type, buttonStyle }) => {
	return (
		<button onClick={onClick} className={`button ${customStyle} ${buttonStyle}`} type={type}>{children}</button>
	)
}

Button.propTypes = {
	buttonStyle: PropTypes.string,
	customStyle: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string,
	type: PropTypes.string,
}

Button.defaultProps = {
	buttonStyle: 'button__default',
	onClick: () => { },
	children: '',
	type: 'button'
}

export default Button