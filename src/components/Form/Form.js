import React, { useContext } from 'react'
import EnterType from '../EnterType/EnterType'
import { CloseContext } from '../context/CloseContext'
import './Form.sass'

function Form() {
	const { startPage, closeCurrentPage } = useContext(CloseContext)

	return (
		<>
			<div className="app__container">
				{startPage ? '' : <img src="img/left-arrow.svg" alt="close-btn" className="app__close-button" onClick={() => closeCurrentPage()}></img>}
				<div className="app__content-left">
					<img src="img/img-2.svg" alt="" className="app__main-image absolute-center" />
				</div>
				<div className="app__content-right">
					<EnterType />
				</div>
			</div>
		</>
	)
}

export default Form