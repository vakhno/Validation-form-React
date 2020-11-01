import React, { useEffect, useContext } from 'react'
import useForm2 from '../useForm/useForm2'
import ValidateInfo2 from '../ValidateInfo/ValidateInfo2'
import { FormTransitionContext } from '../context/FormTransitionContext'
import { CloseContext } from '../context/CloseContext'

const FormSignIn = ({ submitForm }) => {
	const { setStartPage } = useContext(CloseContext)
	const { setNewForm } = useContext(FormTransitionContext)
	const { handleChange, values, handleSubmit, errors } = useForm2(ValidateInfo2, submitForm)

	useEffect(() => {
		setStartPage(false)
	})

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-inputs">
					<label htmlFor="email" className="form-label">Email</label>
					<input type="email" placeholder='Enter your email' name="email" id="email" className="form-input" value={values.email} onChange={handleChange} />
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label htmlFor="password" className="form-label">Password</label>
					<input type="password" placeholder='Enter your password' name="password" id="password" className="form-input" value={values.password} onChange={handleChange} />
					{errors.password && <p>{errors.password}</p>}
				</div>
				<button className="form-input-btn" type="submit">Sign up</button>
				<div className="form-input-login">
					Dont have an account? Create <span onClick={() => setNewForm(true)}>here</span>
				</div>
			</form>
		</div>
	)
}

export default FormSignIn

