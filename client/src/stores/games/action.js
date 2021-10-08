import axios from "axios";

import {
	SET_GAMES,
	SET_GAME_DETAIL,
	SET_LOADING_FETCH,
	SET_LOADING_ADD,
	SET_LOADING_EDIT,
	SET_ERROR,
} from "./actionType";

const baseURL = "http://localhost:3001/games";

export function setGames(payload) {
	return {
		type: SET_GAMES,
		payload,
	};
}

export function setGameDetail(payload) {
	return {
		type: SET_GAME_DETAIL,
		payload,
	};
}

export function setLoadingFetch(payload) {
	return {
		type: SET_LOADING_FETCH,
		payload,
	};
}

export function setLoadingAdd(payload) {
	return {
		type: SET_LOADING_ADD,
		payload,
	};
}

export function setLoadingEdit(payload) {
	return {
		type: SET_LOADING_EDIT,
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
			dispatch(setLoadingFetch(true));
			const response = await axios.get(baseURL);

			dispatch(setGames(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}

export function fetchGameByID(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingFetch(true));
			const response = await axios.get(`${baseURL}/${payload}`);

			dispatch(setGameDetail(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}

export function addGame(payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingAdd(true));

			await axios.post(baseURL, payload);
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingAdd(false));
		}
	};
}

export function editGame(id, payload) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			dispatch(setLoadingEdit(true));
			await axios.put(`${baseURL}/${id}`, payload);
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoadingEdit(false));
		}
	};
}

export function deleteGame(id) {
	return async function (dispatch) {
		try {
			dispatch(setError(null));
			await axios.delete(`${baseURL}/${id}`);
			dispatch(fetchGames());
		} catch (error) {
			dispatch(setError(error));
		}
	};
}
