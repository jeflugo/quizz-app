import { createContext, useContext, useEffect, useRef, useState } from 'react'

const Context = createContext()

function StateContext({ children }) {
	const [start, setStart] = useState(false)
	const [questions, setQuestions] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(1)
	const [triviaDone, setTriviaDone] = useState(false)
	const [score, setScore] = useState(0)

	const countdownRef = useRef()
	const TRIVIA_API_URL = 'https://the-trivia-api.com/v2/questions'

	const handleStart = () => {
		countdownRef.current.start()
		setStart(true)
	}

	const nextQuestion = question => {
		if (question) {
			setScore(prev => (question.correct ? prev + 1 : prev))
			setCurrentQuestion(prev => prev + 1)
		}
	}

	useEffect(() => {
		fetch(`${TRIVIA_API_URL}?difficulties=easy,medium`)
			.then(res => res.json())
			.then(data => setQuestions(data))
	}, [])

	return (
		<Context.Provider
			value={{
				handleStart,
				questions,
				start,
				countdownRef,
				currentQuestion,
				nextQuestion,
				setTriviaDone,
				triviaDone,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default StateContext

export const useStateContext = () => useContext(Context)
