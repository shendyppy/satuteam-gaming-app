import axios from "axios";

import { SET_GAMES, SET_LOADING, SET_ERROR } from "./actionType";

const baseURL = "http://localhost:3001/games";

export function setGames(payload) {
	return {
		type: SET_GAMES,
		payload,
	};
}

export function setLoading(payload) {
	return {
		type: SET_LOADING,
		payload,
	};
}

export function setError(payload) {
	return {
		type: SET_ERROR,
		payload,
	};
}

export function fetchGames() {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoading(true));
			const response = await axios.get(baseURL);

			dispatch(setGames(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
}

export function fetchGameByID(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoading(true));
			const response = await axios.get(`${baseURL}/${payload}`);

			dispatch(setGames(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
}

export function addGame(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			const response = await axios.post(baseURL, payload);

			dispatch(setGames(response.data));
		} catch (error) {
			dispatch(setError(error));
		}
	};
}

export function editGame(id, payload) {
	return async function (dispatch) {
		try {
			const response = await axios.put(`${baseURL}/${id}`, payload);

			dispatch(setGames(response.data));
		} catch (error) {
			dispatch(setError(error));
		}
	};
}

export function deleteGame(id) {
	return async function (dispatch) {
		try {
			await axios.delete(`${baseURL}/${id}`);
		} catch (error) {
			dispatch(setError(error));
		}
	};
}
