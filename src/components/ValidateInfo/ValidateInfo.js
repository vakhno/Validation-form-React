function ValidateInfo(values) {
	let errors = {}

	if (!values.username.trim()) {
		errors.username = 'Username required'
	}

	if (!values.email) {
		errors.email = 'Email required'
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email is invalid'
	}

	if (!values.password) {
		errors.password = 'Password is required'
	} else if (values.password.length < 6) {
		errors.password = 'Password need to be 6 characters or more'
	}

	if (!values.password2) {
		errors.password2 = 'Passwors is required'
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Passwords dont match'
	}

	return errors
}

export default ValidateInfo
