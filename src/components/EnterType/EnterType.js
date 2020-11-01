import React, { useEffect, useContext } from 'react'
import FormSignUp from '../FormSignUp/FormSignUp'
import FormSignIn from '../FormSignIn/FormSignIn'
import FormSuccess from '../FormSuccess/FormSuccess'
import { CloseContext } from '../context/CloseContext'
import { FormTransitionContext } from '../context/FormTransitionContext'
import Button from '../Button/Button'
import './EnterType.sass'

const EnterType = () => {
	const { startPage } = useContext(CloseContext)
	const { isSubmitted, submitForm, setNewForm, form } = useContext(FormTransitionContext)

	useEffect(() => {
		startPage && setNewForm(null)
	}, [startPage])

	return (
		<>
			{form === null ?
				(
					<div className="choose-form absolute-center">
						<img src="img/img-1.svg" alt="" className="choose-form__img" />
						<Button customStyle='choose-form__button' buttonStyle='button__default' onClick={() => setNewForm(false)}>Sign In</Button>
						<Button customStyle='choose-form__button' buttonStyle='button__default' onClick={() => setNewForm(true)}>Sign Up</Button>
					</div>) :
				(form === true) ? (!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)) : (!isSubmitted ? (<FormSignIn submitForm={submitForm} />) : (<FormSuccess />))
			}
		</>
	)
}

export default EnterType