import React, { useContext, useEffect } from 'react'
import useForm from '../useForm/useForm'
import ValidateInfo from '../ValidateInfo/ValidateInfo'
import { CloseContext } from '../context/CloseContext'
import { FormTransitionContext } from '../context/FormTransitionContext'

import './FormSignUp.sass'

function FormSignUp({ submitForm }) {
	const { handleChange, values, handleSubmit, errors } = useForm(ValidateInfo, submitForm)
	const { setNewForm } = useContext(FormTransitionContext)
	const { setStartPage } = useContext(CloseContext)

	useEffect(() => {
		setStartPage(false)
	})

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h1>Get Started with us today!</h1>
			<div className="form-inputs">
				<label htmlFor="username" className="form-label">Username</label>
				<input type="text" placeholder='Enter your username' name="username" id="username" className="form-input" value={values.username} onChange={handleChange} />
				{errors.username && <p>{errors.username}</p>}
			</div>
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
			<div className="form-inputs">
				<label htmlFor="password2" className="form-label">Confirm password</label>
				<input type="password" placeholder='Enter your password' name="password2" id="password2" className="form-input" value={values.password2} onChange={handleChange} />
				{errors.password2 && <p>{errors.password2}</p>}
			</div>
			<button className="form-input-btn" type="submit">Sign up</button>
			<div className="form-input-login">
				Already have an account? Login <span onClick={() => setNewForm(false)}>here</span>
			</div>
		</form>
	)
}

export default FormSignUp