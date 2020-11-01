import { useState, useEffect } from 'react'

function useForm2(ValidateInfo2, submitForm) {
	const [values, setValues] = useState({
		email: '',
		password: ''
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

		setErrors(ValidateInfo2(values))
		setIsSubmit(true)
	}

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmit) {
			submitForm()
		}
	}, [errors, submitForm, isSubmit])

	return { handleChange, values, handleSubmit, errors }
}

export default useForm2
