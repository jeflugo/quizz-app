import StartButton from './components/StartButton'
import Trivia from './components/Trivia'
import { useStateContext } from './context/StateContext'
import Timer from './components/Timer'
import Results from './components/Results'

function App() {
	const { start, triviaDone } = useStateContext()
	return (
		<div className='mx-auto w-[500px]'>
			<h1 className='mb-4 text-center text-4xl font-medium'>Quizz app</h1>
			<Timer />
			{start ? !triviaDone ? <Trivia /> : <Results /> : <StartButton />}
		</div>
	)
}

export default App
