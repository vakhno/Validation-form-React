import React, { createContext, useContext, useReducer } from 'react'
import { FormTransitionContext } from '../context/FormTransitionContext'

export const CloseContext = createContext()

function reducer(state, action) {
	switch (action.type) {
		case 'HIDE': return { startPage: true };
		case 'VISIBLE': return { startPage: false };
		default: return state;
	}
}

const CloseContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { startPage: true });
	const { isSubmitted, cancelForm } = useContext(FormTransitionContext)

	const visibleArrow = () => {
		dispatch({
			type: 'VISIBLE'
		})
	}

	const hideArrow = () => {
		dispatch({
			type: 'HIDE'
		})
		isSubmitted && cancelForm()
	}

	return (
		<CloseContext.Provider value={{ startPage: state.startPage, visibleArrow, hideArrow }}>
			{children}
		</CloseContext.Provider>
	)
}

export default CloseContextProvider

//БЕЗ ПОМОЩИ useReducer
// import React, { createContext, useState, useContext, useEffect } from 'react'
// import { FormTransitionContext } from '../context/FormTransitionContext'

// export const CloseContext = createContext()

// const CloseContextProvider = ({ children }) => {
// 	const [startPage, setStartPage] = useState(true)
// 	const { isSubmitted, cancelForm } = useContext(FormTransitionContext)

// 	const visibleArrow = (choice) => {
// 		setStartPage(choice)
// 	}

// 	const hideArrow = () => {
// 		visibleArrow(true)
// 		isSubmitted && cancelForm()
// 	}

// 	return (
// 		<CloseContext.Provider value={{ startPage, visibleArrow, hideArrow }}>
// 			{children}
// 		</CloseContext.Provider>
// 	)
// }

// export default CloseContextProvider