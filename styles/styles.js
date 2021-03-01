import React from "react";
import styled from "styled-components";

export const Button = styled.button`
	width: 200px;
	height: 50px;
	margin: 20px;
	border-radius:15px;
	border-top-style: hidden;
	border-right-style: hidden;
	border-left: solid 5px #c8c8ca;
	border-bottom: solid 5px #c8c8ca;
	font-size: 30px;
	&:focus{
		outline: none;
	}
	&:active {
		transform: translateY(5px);
	}
`;
export const GameField = styled.div`
	height: 100vh;
	width: 100vh;
	position: relative;
`;
export const GameInfo = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 15%;
	top: 0;
	width: 20vw;
	height: 10vh;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	color: #c8c8ca;
`;
export const GameInteract = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 10px;
	top: 0;
	width: 40vh;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const StarStyle = styled.div`
	position: absolute;
	background: url("/star.svg") no-repeat;
	background-size: 100%;
	width: 20%;
	height: 20%;
	font-size: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	top: 0,
	left: 0,
`;
