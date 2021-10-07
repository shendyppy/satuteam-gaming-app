import { SET_CART } from "./actionType";

const initialState = {
	carts: [],
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CART:
			return { ...state, carts: [...state.carts, payload] };
		default:
			return state;
	}
};

export default reducer;
