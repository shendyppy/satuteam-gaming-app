import {
	SET_ERROR,
	SET_GAMES,
	SET_GAME_DETAIL,
	SET_LOADING_ADD,
	SET_LOADING_EDIT,
	SET_LOADING_FETCH,
} from "./actionType";

const initialState = {
	games: [],
	gameDetail: [],
	loadingAdd: false,
	loadingEdit: false,
	loadingFetch: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_GAMES:
			return { ...state, games: payload };
		case SET_GAME_DETAIL:
			return { ...state, gameDetail: payload };
		case SET_LOADING_ADD:
			return { ...state, loadingAdd: payload };
		case SET_LOADING_EDIT:
			return { ...state, loadingEdit: payload };
		case SET_LOADING_FETCH:
			return { ...state, loadingFetch: payload };
		case SET_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default reducer;
