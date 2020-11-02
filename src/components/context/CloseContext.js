import React, { createContext, useState, useContext, useEffect } from 'react'
import { FormTransitionContext } from '../context/FormTransitionContext'

export const CloseContext = createContext()

const CloseContextProvider = ({ children }) => {
	const [startPage, setStartPage] = useState(true)
	const { isSubmitted, cancelForm } = useContext(FormTransitionContext)

	const toStartPage = (choice) => {
		setStartPage(choice)
	}

	const closeCurrentPage = () => {
		toStartPage(true)
		isSubmitted && cancelForm()
	}

	return (
		<CloseContext.Provider value={{ startPage, toStartPage, closeCurrentPage }}>
			{children}
		</CloseContext.Provider>
	)
}

export default CloseContextProvider