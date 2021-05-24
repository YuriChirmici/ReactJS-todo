import colorsReducer, {setColors, setAngle} from "./colors-reducer";

let state = {
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

test('colors should be changed', () => {
	let action = setColors("first", "green", 10);
	let newState = colorsReducer(state, action);
	expect(newState.first.green).toBe(10);
});

test('angle should be changed', () => {
	let action = setAngle(100);

	let newState = colorsReducer(state, action);
	expect(newState.angle).toBe(100);
});

