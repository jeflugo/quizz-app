import { useStateContext } from '../context/StateContext'
import Question from './Question'

function Trivia() {
	const { questions, currentQuestion } = useStateContext()
	const current = questions.length !== 0 && questions[currentQuestion - 1]
	return <Question key={current} {...current} />
}

export default Trivia
