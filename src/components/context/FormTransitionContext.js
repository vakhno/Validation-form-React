import React, { createContext, useReducer } from 'react'

export const FormTransitionContext = createContext()

function reducer(state, action) {
	switch (action.type) {
		case 'SUBMIT_FORM': return { isSubmitted: true }
		case 'CANCEL_FORM': return { isSubmitted: false }
		case 'NEW_FORM': return { form: action.whatFormChoose }
		default: return state;
	}
}

const FormTransitionContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { form: null, isSubmitted: false })

	function submitForm() {
		dispatch({
			type: 'SUBMIT_FORM'
		})
	}

	function cancelForm() {
		dispatch({
			type: 'CANCEL_FORM'
		})
	}

	function setNewForm(choosenForm) {
		dispatch({
			type: 'NEW_FORM',
			whatFormChoose: choosenForm
		})
	}

	return (
		<FormTransitionContext.Provider value={{ isSubmitted: state.isSubmitted, submitForm, cancelForm, setNewForm, form: state.form }}>
			{ children}
		</FormTransitionContext.Provider >
	)
}

export default FormTransitionContextProvider

//БЕЗ ПОМОЩИ useReducer
// import React, { useState, createContext } from 'react'

// export const FormTransitionContext = createContext()

// const FormTransitionContextProvider = ({ children }) => {
// 	const [form, setForm] = useState(null)
// 	const [isSubmitted, setIsSubmitted] = useState(false)

// 	function submitForm() {
// 		setIsSubmitted(true)
// 	}

// 	function cancelForm() {
// 		setIsSubmitted(false)
// 	}

// 	function setNewForm(choosenForm) {
// 		setForm(choosenForm)
// 	}

// 	return (
// 		<FormTransitionContext.Provider value={{ isSubmitted, submitForm, cancelForm, setNewForm, form }}>
// 			{ children}
// 		</FormTransitionContext.Provider >
// 	)
// }

// export default FormTransitionContextProvider