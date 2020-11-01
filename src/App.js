import './App.sass'
import Form from './components/Form/Form'
import CloseContext from './components/context/CloseContext'
import FormTransitionContext from './components/context/FormTransitionContext'

function App() {
	return (
		<>
			<CloseContext>
				<FormTransitionContext>
					<Form />
				</FormTransitionContext>
			</CloseContext>
		</>
	)
}

export default App
