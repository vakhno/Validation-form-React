import React, { useState, useEffect, useContext } from 'react'
import FormSignUp from '../FormSignUp/FormSignUp'
import FormSignIn from '../FormSignIn/FormSignIn'
import FormSuccess from '../FormSuccess/FormSuccess'
import { CloseContext } from '../context/CloseContext'
import { FormTransitionContext } from '../context/FormTransitionContext'
import './EnterType.sass'

const EnterType = () => {
	const { startPage, setStartPage } = useContext(CloseContext)
	const { isSubmitted, submitForm, setNewForm, form } = useContext(FormTransitionContext)

	// const [way, setWay] = useState(null)

	useEffect(() => {
		startPage && setNewForm(null)
	}, [startPage])

	return (
		<>
			{form === null ?
				(
					<div className="choose-form">
						<img src="img/img-1.svg" alt="" className="choose-form__img" />
						<button className="choose-form__button" onClick={() => setNewForm(false)}>Sign In</button>
						<button className="choose-form__button" onClick={() => setNewForm(true)}>Registration</button>
					</div>) :
				(form === true) ? (!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)) : (!isSubmitted ? (<FormSignIn submitForm={submitForm} />) : (<FormSuccess />))
			}
		</>
	)
}

export default EnterType