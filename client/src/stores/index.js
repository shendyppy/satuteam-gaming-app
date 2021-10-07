import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./cart/reducer";
import gameReducer from "./games/reducer";

const store = createStore(
	combineReducers({
		carts: cartReducer,
		gamess: gameReducer,
	}),
	applyMiddleware(thunk)
);

export default store;
