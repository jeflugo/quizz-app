import Countdown from 'react-countdown'
import { useStateContext } from '../context/StateContext'

function Timer() {
	const { countdownRef } = useStateContext()
	// const minutes = 1
	const minInMs = 1 * 60 * 1000
	const renderer = ({ minutes, seconds, completed }) =>
		completed ? (
			<span>{`Time's up`}</span>
		) : (
			<>
				<span>
					Time left {minutes < 10 ? `0${minutes}` : minutes}:
					{seconds < 10 ? `0${seconds}` : seconds}
				</span>
			</>
		)
	return (
		<h3 className='mb-4 text-center text-2xl'>
			<Countdown
				date={Date.now() + minInMs}
				renderer={renderer}
				autoStart={false}
				ref={countdownRef}
			/>
		</h3>
	)
}

export default Timer
