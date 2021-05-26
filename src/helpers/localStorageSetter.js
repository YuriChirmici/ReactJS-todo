export const setStateIntoLocalStorage = (state, storageName) => {
	let jState = JSON.stringify(state)
	localStorage.setItem(storageName, jState)
}

export const getStateFromLocalStorage = (state, storageName) => {
	let initialState = state;
	if (localStorage.getItem(storageName) === null) {
		setStateIntoLocalStorage(initialState);
	} else {
		initialState = JSON.parse(localStorage.getItem(storageName));
	}
	return initialState;
}
