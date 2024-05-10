import { useStateContext } from '../context/StateContext'

function StartButton() {
	const { handleStart } = useStateContext()
	return (
		<div className='mt-40 flex justify-center'>
			<button
				onClick={handleStart}
				className='rounded-md bg-green-600 px-4 py-2 text-xl text-gray-100 transition-all hover:scale-105'
			>
				Start trivia
			</button>
		</div>
	)
}

export default StartButton
