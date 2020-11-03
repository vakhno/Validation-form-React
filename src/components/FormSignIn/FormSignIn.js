import React, { useEffect, useContext } from 'react'
import useForm2 from '../useForm/useForm2'
import ValidateInfo2 from '../ValidateInfo/ValidateInfo2'
import { FormTransitionContext } from '../context/FormTransitionContext'
import { CloseContext } from '../context/CloseContext'
import LabelInput from '../Input/LabelInput'
import Button from '../Button/Button'
import './FormSignIn.sass'

const FormSignIn = ({ submitForm }) => {
	const { setNewForm } = useContext(FormTransitionContext)
	const { handleChange, values, handleSubmit, errors } = useForm2(ValidateInfo2, submitForm)
	const { visibleArrow, startPage } = useContext(CloseContext)

	useEffect(() => {
		visibleArrow()
	}, [startPage])

	return (
		<div>
			<form className="form absolute-center" onSubmit={handleSubmit}>
				<div className="form__input-block">
					<LabelInput customStyle='form-input' inputStyle='input__default' label='Email' placeholder='Enter your email' name='email' id="email" type="email" value={values.email} onChange={handleChange} />
					{errors.email && <p className="form__error-text">{errors.email}</p>}
				</div>
				<div className="form__input-block">
					<LabelInput customStyle='form-input' inputStyle='input__default' label='Password' placeholder='Enter your password' name='password' id="password" type="password" value={values.password} onChange={handleChange} />
					{errors.password && <p className="form__error-text">{errors.password}</p>}
				</div>
				<Button type='submit' customStyle='form__input-button' buttonStyle='button__default'>Sign In</Button>
				<div className="form__prompt">
					Dont have an account? Create <span onClick={() => setNewForm(true)}>here</span>
				</div>
			</form>
		</div>
	)
}

export default FormSignIn

