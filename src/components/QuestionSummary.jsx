function QuestionSummary({ question, options, answer }) {
	return (
		<div className='flex flex-col'>
			<div className='mb-3 overflow-hidden rounded-md border border-gray-900'>
				<h3 className='border border-b-black p-2 text-xl'>{question}</h3>
				{options.map((question, index) => (
					<p
						key={index}
						className={`block w-full px-6 py-2 text-left text-lg transition-all ${question.correct && 'bg-green-500 text-gray-100'}`}
					>
						{question.text}
					</p>
				))}
				<h4 className='border border-b-black border-t-black p-2 text-lg'>
					Your answer
				</h4>
				<p
					className={`w-full px-6 py-2 text-left text-lg text-gray-100 ${answer.correct ? 'bg-green-600' : 'bg-red-500'}`}
				>
					{answer.text}
				</p>
			</div>
		</div>
	)
}

export default QuestionSummary
