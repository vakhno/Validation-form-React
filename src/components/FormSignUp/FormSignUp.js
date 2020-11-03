import React, { useContext, useEffect } from 'react'
import useForm from '../useForm/useForm'
import ValidateInfo from '../ValidateInfo/ValidateInfo'
import { CloseContext } from '../context/CloseContext'
import { FormTransitionContext } from '../context/FormTransitionContext'
import Button from '../Button/Button'
import LabelInput from '../Input/LabelInput'
import './FormSignUp.sass'

function FormSignUp({ submitForm }) {
	const { handleChange, values, handleSubmit, errors } = useForm(ValidateInfo, submitForm)
	const { setNewForm } = useContext(FormTransitionContext)
	const { visibleArrow, startPage } = useContext(CloseContext)

	useEffect(() => {
		visibleArrow()
	}, [startPage])

	return (
		<form className="form absolute-center" onSubmit={handleSubmit}>
			<h1 className="form__title">Get Started with us today!</h1>
			<div className="form__input-block">
				<LabelInput customStyle='form-input' inputStyle='input__default' label='Username' placeholder='Enter your username' name='username' id="username" type="text" value={values.username} onChange={handleChange} />
				{errors.username && <p className="form__error-text">{errors.username}</p>}
			</div>
			<div className="form__input-block">
				<LabelInput customStyle='form-input' inputStyle='input__default' label='Email' placeholder='Enter your email' name='email' id="email" type="email" value={values.email} onChange={handleChange} />
				{errors.email && <p className="form__error-text">{errors.email}</p>}
			</div>
			<div className="form__input-block">
				<LabelInput customStyle='form-input' inputStyle='input__default' label='Password' placeholder='Enter your password' name='password' id="password" type="password" value={values.password} onChange={handleChange} />
				{errors.password && <p className="form__error-text">{errors.password}</p>}
			</div>
			<div className="form__input-block">
				<LabelInput customStyle='form-input' inputStyle='input__default' label='Confirm password' placeholder='Enter your password' name='password2' id="password2" type="password" value={values.password2} onChange={handleChange} />
				{errors.password2 && <p className="form__error-text">{errors.password2}</p>}
			</div>
			<Button type='submit' customStyle='form__input-button' buttonStyle='button__default'>Sign Up</Button>
			<div className="form__prompt">
				Already have an account? Login <span onClick={() => setNewForm(false)}>here</span>
			</div>
		</form>
	)
}

export default FormSignUp