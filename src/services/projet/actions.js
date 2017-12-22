
import * as types from "./constants";

export function ajoute_stock(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.AJOUTE_STOCK,
			payload
		});
	};
};


export function supprime_stock(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.SUPPRIME_STOCK,
			payload: payload
		});
	};
};



export function increment_stock(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.INCREMENT_STOCK,
			payload: payload
		});
	};
};

export function decrement_stock(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.DECREMENT_STOCK,
			payload: payload
		});
	};
};

export function ajoute_panier(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.AJOUTE_PANIER,
			payload: payload
		});
	};
};

export function increment_panier(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.INCREMENT_PANIER,
			payload: payload
		});
	};
};

export function decrement_panier(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.DECREMENT_PANIER,
			payload: payload
		});
	};
};

export function valide_commande(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.VALIDE_COMMANDE,
			payload: payload
		});
	};
};

export function valide_edit(index, objet) {
	return (dispatch, state) => {
		dispatch({
			type: types.VALIDE_EDIT,
			index: index,
			objet: objet
		});
	};
};

export function setPanier1(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.SET_PANIER_1,
			payload: payload,
		});
	};
};

export function setPanier2(id) {
	return (dispatch, state) => {
		dispatch({
			type: types.SET_PANIER_2,
			id: id
		});
	};
};

export function increment_stock2(id) {
	return (dispatch, state) => {
		dispatch({
			type: types.INCREMENT_STOCK_2,
			id: id
		});
	};
};


export function decrement_stock2(id) {
	return (dispatch, state) => {
		dispatch({
			type: types.DECREMENT_STOCK_2,
			id: id
		});
	};
};



