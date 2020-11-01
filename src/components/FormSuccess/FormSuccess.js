import React from 'react'
import './FormSuccess.sass'

const FormSuccess = () => {
	return (
		<div className="absolute-center success">
			<div className="success__title">We have received your request!</div>
			<img src="img/img-3.svg" alt="success to page" className="success__image" />
		</div>
	)
}

export default FormSuccess