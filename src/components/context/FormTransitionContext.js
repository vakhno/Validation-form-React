import React, { useState, createContext } from 'react'

export const FormTransitionContext = createContext()

const FormTransitionContextProvider = ({ children }) => {
	const [form, setForm] = useState(null)
	const [isSubmitted, setIsSubmitted] = useState(false)

	function submitForm() {
		setIsSubmitted(true)
	}

	function cancelForm() {
		setIsSubmitted(false)
	}

	function setNewForm(choosenForm) {
		setForm(choosenForm)
	}

	return (
		<FormTransitionContext.Provider value={{ isSubmitted, submitForm, cancelForm, setNewForm, form }}>
			{ children}
		</FormTransitionContext.Provider >
	)
}

export default FormTransitionContextProvider