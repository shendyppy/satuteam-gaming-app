import { SET_ERROR, SET_GAMES, SET_LOADING } from "./actionType";

const initialState = {
	games: [],
	loading: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_GAMES:
			return { ...state, games: payload };
		case SET_LOADING:
			return { ...state, loading: payload };
		case SET_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default reducer;
