import StartButton from './components/StartButton'
import Trivia from './components/Trivia'
import { useStateContext } from './context/StateContext'
import Timer from './components/Timer'

function App() {
	const { start, triviaDone } = useStateContext()
	return (
		<div className='mx-auto w-[500px]'>
			<h1 className='mb-4 text-center text-4xl font-medium'>Quizz app</h1>
			<Timer />
			{start ? (
				!triviaDone ? (
					<Trivia />
				) : (
					<h1>Trivia done</h1>
				)
			) : (
				<StartButton />
			)}
		</div>
	)
}

export default App
