import React, {useContext, useState} from "react";
import {useInterval} from "../utils/useInterval";
import {GameContext} from "../context/GameContext";

export interface IStarProps {
    index: number
    id: string
    onGone(value: number): void
}

export const Star = (props: IStarProps) => {
    const [height, setHeight] = useState(-20);
    const [value] = useState(generateValue);
    const [speed] = useState(generateSpeed);
    const gameContext = useContext(GameContext);
    useInterval(() => {
        if(height != 80) {
            if (!gameContext.paused) {
                const newHeight = Math.min(80, height + speed);
                setHeight(newHeight);
            }
        } else {
            gameContext.setCount(gameContext.count + value);
            gameContext.setStars(gameContext.stars.map(it => (!it || (it?.key != props.id)) ? it : null));
        }
    }, 1000);
    return (
        <div
            style={{
                top: 0,
                left: 0,
                transform: `translateY(${height}vh) translateX(${props.index * 25}vh)`,
                transition: "all 1s linear"
            }}
            className="star"
        >
            <p>{value}</p>
        </div>
    );
}

function generateValue(): number {
    let maxNumber = 5;
    let minNumber = -5;
    let randomNumber = minNumber + Math.floor((Math.random() * (maxNumber - minNumber)) + 1);
    if (randomNumber === 0) {
        return generateValue();
    }
    return randomNumber;
}

function generateSpeed(): number {
    return 100 / (5 + Math.floor(Math.random() * 10));
}