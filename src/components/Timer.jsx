import Countdown from 'react-countdown'
import { useStateContext } from '../context/StateContext'

const renderer = ({ minutes, seconds, completed }) =>
	completed ? (
		<span>{`Time's up`}</span>
	) : (
		<span>
			Time left {minutes < 10 ? `0${minutes}` : minutes}:
			{seconds < 10 ? `0${seconds}` : seconds}
		</span>
	)
function Timer() {
	const { countdownRef, customTime } = useStateContext()
	return (
		<h3 className='mb-4 text-center text-2xl'>
			<Countdown
				date={customTime}
				renderer={renderer}
				autoStart={false}
				ref={countdownRef}
			/>
		</h3>
	)
}

export default Timer
