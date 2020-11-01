import React, { useContext, useEffect } from 'react'
import EnterType from '../EnterType/EnterType'
import { FormTransitionContext } from '../context/FormTransitionContext'
import { CloseContext } from '../context/CloseContext'
import './Form.sass'

function Form() {
	const { startPage, setStartPage } = useContext(CloseContext)
	const { cancelForm, isSubmitted } = useContext(FormTransitionContext)
	const toStartPage = () => {
		setStartPage(true)
		isSubmitted && cancelForm()
	}

	return (
		<>



			<div className="form-container">
				{startPage ? '' : <img src="img/left-arrow.svg" alt="close-btn" className="close-btn" onClick={() => toStartPage()}></img>}
				<div className="form-content-left">
					<img src="img/img-2.svg" alt="" className="form-img" />
				</div>
				<div className="form-content-right">
					<EnterType />
				</div>
			</div>
		</>
	)
}

export default Form