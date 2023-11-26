import axios from "axios";

import { SET_CART, SET_ERROR, SET_LOADING } from "./actionType";

const baseURL = "https://satuteam.herokuapp.com/carts";

export function setCart(payload) {
	return {
		type: SET_CART,
		payload,
	};
}

export function setError(payload) {
	return {
		type: SET_ERROR,
		payload,
	};
}

export function setLoading(payload) {
	return {
		type: SET_LOADING,
		payload,
	};
}

export function fetchCart() {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoading(true));
			const response = await axios.get(baseURL);

			dispatch(setCart(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
}

export function addCart(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			await axios.post(baseURL, payload);
		} catch (error) {
			dispatch(setError(error));
		}
	};
}

export function deleteCart(id) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			await axios.delete(`${baseURL}/${id}`);
		} catch (error) {
			dispatch(setError(error));
		} finally {
			setTimeout(3000);
			await dispatch(fetchCart());
		}
	};
}
