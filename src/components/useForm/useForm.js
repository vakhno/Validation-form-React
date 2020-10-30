import React, { useState, useEffect } from 'react'

function useForm(ValidateInfo) {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
	})
	const [errors, setErrors] = useState({})
	const [isSubmit, setIsSubmit] = useState(false)
	const handleChange = e => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

		setErrors(ValidateInfo(values))
		setIsSubmit(true)
	}

	return { handleChange, values, handleSubmit, errors }
}

export default useForm
