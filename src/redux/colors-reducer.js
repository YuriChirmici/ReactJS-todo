import {setStateIntoLocalStorage, getStateFromLocalStorage}
	from "../helpers/localStorageSetter";

const SET_COLORS = "colors/SET_COLORS";
const SET_ANGLE = "colors/SET_ANGLE";
const STORAGE_NAME = "todo/colors";

let initialState = {
	first: {
		red: 213,
		green: 130,
		blue: 83,
		opacity: 0.7,
	},
	second: {
		red: 210,
		green: 80,
		blue: 120,
		opacity: 0.7,
	},
	angle: 90,
}

initialState = getStateFromLocalStorage(initialState, STORAGE_NAME)

const colorsReducer = (state = initialState, action) => {
	let newState = state;
	switch(action.type) {
		case SET_COLORS: 
			newState = {...state};
			newState[action.number] = {...state.[action.number]}
			newState[action.number][action.name] = action.value;
			break;
		case SET_ANGLE:  
			newState = {...state, angle: action.angle}
			break;
		default: 
			newState = state;
			break;
	}
	setStateIntoLocalStorage(newState, STORAGE_NAME);
	return newState;
}

export const setColors = (number, name, value) => {
	return {type: SET_COLORS, number, name, value: Number(value) }
}

export const setAngle = (angle) => {
	return {type: SET_ANGLE, angle}
}


export default colorsReducer;
