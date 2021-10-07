import axios from "axios";

import { SET_CART } from "./actionType";

const baseURL = "http://localhost:3001/cart";

export function addToCart(payload) {
	return {
		type: SET_CART,
		payload,
	};
}

export function addCart(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			const response = await axios.post(baseURL, payload);

			dispatch(addToCart(response.data));
		} catch (error) {
			dispatch(setError(error));
		}
	};
}

export function deleteCart(id) {
	return async function (dispatch) {
		try {
			await axios.delete(`${baseURL}/${id}`);
		} catch (error) {
			dispatch(setError(error));
		}
	};
}
