import React, {useEffect, useState} from "react";

export default function StarsGame () {

	const [count, setCount] = useState(0);
	const [seconds, setSeconds] = useState(-1);
	const [buttonTitle, setButtonTitle] = useState("Запуск");
	const [remember, setRemember] = useState(0);

	useEffect(() => {
		const countSecs = setInterval(() => {
			if (seconds >= 0) {
				setSeconds(seconds + 1);
			}
			else if(remember !== 0){
				setSeconds(remember + 1);
			}
		}, 1000)

		return () => clearInterval(countSecs)
	}, [seconds]);

	let maxNumber = 5;
	let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
	return (
		<>
			<div className="game-field">
				<div className="star"
					     onClick={() => setCount(count + 1)}>
					<p>{randomNumber}</p>
				</div>
				</div>

			<div className="game-info">
				<div>Score{' '} {count}</div>
				<div>Timer{' '} {remember !== 0 ? remember : (seconds >= 0 ? seconds : 0)}</div>
			</div>

			<div className="game-interact">
				<button onClick={() => {
					setSeconds(remember === 0 ? 0 : remember);
					setRemember(0);
				}}>{buttonTitle}</button>
				<button onClick={() => {
					setRemember(seconds);
					setSeconds(-1);
					setButtonTitle("Продолжить")
				}}>Пауза</button>
				<button onClick={() => {
					setCount(0);
					setSeconds(0);
					setRemember(0)
				}}>Рестарт</button>
			</div>
		</>
	)
}