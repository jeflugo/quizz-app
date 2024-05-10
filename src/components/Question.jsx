import { useMemo, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import shuffle from '../utilities/shuffle'

function Question({ question, correctAnswer, incorrectAnswers }) {
	const [selected, setSelected] = useState()
	const { currentQuestion, nextQuestion, setTriviaDone } = useStateContext()

	const options = useMemo(
		() =>
			shuffle([
				{ correct: true, text: correctAnswer },
				...incorrectAnswers.map(ans => ({ correct: false, text: ans })),
			]),
		[correctAnswer, incorrectAnswers],
	)
	return (
		<div className='flex flex-col'>
			<h1 className='mb-4 text-2xl'>Question {currentQuestion}</h1>
			<div className='mb-3 overflow-hidden rounded-md border border-gray-900'>
				<h3 className='border border-b-black p-2 text-xl'>{question.text}</h3>
				{options.map((question, index) => (
					<button
						key={index}
						onClick={() => {
							setSelected(prev => {
								if (prev === index) return undefined
								return index
							})
						}}
						className={`block w-full px-6 py-2 text-left text-lg transition-all  ${selected === index ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
					>
						{question.text}
					</button>
				))}
			</div>
			{currentQuestion !== 10 ? (
				<button
					onClick={() => {
						setSelected(undefined)
						nextQuestion(options[selected])
					}}
					className={`self-end rounded-md  px-2 py-1 text-lg text-gray-100  ${!isNaN(selected) ? 'bg-green-600 transition-all hover:scale-105' : 'cursor-not-allowed select-none bg-green-300'}`}
				>
					Next question
				</button>
			) : (
				<button
					onClick={() => setTriviaDone(true)}
					className={`self-end rounded-md  px-2 py-1 text-lg text-gray-100  ${!isNaN(selected) ? 'bg-green-600 transition-all hover:scale-105' : 'cursor-not-allowed select-none bg-green-300'}`}
				>
					Submit answers
				</button>
			)}
		</div>
	)
}

export default Question
