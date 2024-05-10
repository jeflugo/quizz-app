import { useStateContext } from '../context/StateContext'
import QuestionSummary from './QuestionSummary'

function Results() {
	const { score, reset, answeredQuestions } = useStateContext()
	return (
		<>
			<div className='flex flex-col items-center'>
				<h1 className='mb-4 text-3xl'>
					All done, your score is: <span className='font-bold'>{score}/10</span>
				</h1>
				<button
					className='rounded-md bg-green-500 px-6 py-3 text-lg text-gray-100 transition-all hover:scale-105 hover:bg-green-600 active:scale-100'
					onClick={reset}
				>
					Play again
				</button>
			</div>
			<div>
				<h3 className='my-6 text-center text-2xl font-medium underline'>
					Quizz summary
				</h3>
				{answeredQuestions.map(question => (
					<QuestionSummary {...question} key={question.id} />
				))}
			</div>
		</>
	)
}

export default Results
