import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
    myFavourites: [],
    allCharactersFav: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:

            const exists = state.myFavourites.find(fav => fav.id === action.payload.id);
            if (exists) {   //? si ya esta marcado como favorito, no hace nada
                return {
                    ...state
                };
            } else {
                const updatedAllCharactersFav = state.allCharactersFav.filter(char => char.id !== action.payload.id);    //? filtra a todos los que sean diferente al id ingresado
                return {
                    ...state,
                    myFavourites: [...state.myFavourites, action.payload],
                    allCharactersFav: [...updatedAllCharactersFav, action.payload]
                };
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter(
                    char => char.id !== Number(action.payload))
            }

        case FILTER:
            if (action.payload === 'All') {
                return {
                    ...state,
                    myFavourites: state.allCharactersFav,
                }
            }

            let allCharactersFavFiltered = state.allCharactersFav.filter(
                char => char.gender === action.payload);

            return {
                ...state,
                myFavourites: allCharactersFavFiltered,
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav];

            return {
                ...state,
                myFavourites:
                    action.payload === "Ascendente"
                        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                        : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;