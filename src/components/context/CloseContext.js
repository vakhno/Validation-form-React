import React, { createContext, useState } from 'react'

export const CloseContext = createContext()

const CloseContextProvider = ({ children }) => {
	const [startPage, setStartPage] = useState(true)

	return (
		<CloseContext.Provider value={{ startPage, setStartPage }}>
			{children}
		</CloseContext.Provider>
	)
}

export default CloseContextProvider