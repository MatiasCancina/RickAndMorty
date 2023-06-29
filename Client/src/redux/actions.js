import axios from "axios";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (character) => {
    const URL = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        const response = await axios.post(URL, { character })
        return dispatch({
            type: ADD_FAV,
            payload: response.data,
        });
    };
};

export const removeFav = (id) => {
    try {
        const URL = 'http://localhost:3001/rickandmorty/fav/' + id;
        return async (dispatch) => {
            const response = await axios.delete(URL)
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data,
            });
        };
    } catch (error) {
        console.log(error);
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}