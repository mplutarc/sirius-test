import React, {useEffect, useState} from "react";
import {Star} from "./Star";
import {GameContext} from "../context/GameContext";
import {useInterval} from "../utils/useInterval";
import { v4 as uuidv4 } from 'uuid';

export default function StarsGame() {
	const [count, setCount] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [paused, setPaused] = useState(true);
	const [buttonTitle, setButtonTitle] = useState("Запуск");
	const [stars, setStars] = useState([null, null, null]);

	useInterval(() => {
		if (!paused) {
			if (stars.filter(Boolean).length < 3) {
				const id = uuidv4();
				const i = stars.findIndex(it => it === null);
				const star = (<Star key={id} id={id} index={i}/>);
				stars[i] = star;
				setStars([...stars]);
			}
		}
	}, 1000);

	useInterval(() => {
		if (!paused) {
			setSeconds(seconds + 1);
		}
	}, 1000);

	return (
		<>
			<div className="game-field">
				<GameContext.Provider value={{paused, stars, setStars, setCount, count}}>
					{stars}
				</GameContext.Provider>
			</div>

			<div className="game-info">
				<div>Таймер{' '} {seconds}</div>
				<div>Текущая сумма{' '} {count}</div>
			</div>

			<div className="game-interact">
				<button onClick={() => {
					setPaused(false);
				}}>{buttonTitle}</button>
				<button onClick={() => {
					setPaused(true);
					setButtonTitle("Продолжить");
				}}>Пауза
				</button>
				<button onClick={() => {
					setCount(0);
					setSeconds(0);
					setPaused(false);
					setStars([null, null, null]);
				}}>Рестарт
				</button>
			</div>
		</>
	)
}