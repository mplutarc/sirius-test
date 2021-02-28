import React from "react";

export interface IGameContext {
    paused: boolean
    setStars(stars: any[]): void
    setCount(count: number): void
    count: number
    stars: any[]
}

export const GameContext = React.createContext<IGameContext>(null);