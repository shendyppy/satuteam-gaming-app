import { SET_CART, SET_ERROR, SET_LOADING } from "./actionType";

const initialState = {
	carts: [],
	loading: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CART:
			return { ...state, carts: payload };
		case SET_ERROR:
			return { ...state, error: payload };
		case SET_LOADING:
			return { ...state, loading: payload };
		default:
			return state;
	}
};

export default reducer;
