import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    allCharactersFav: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharactersFav: action.payload
            }

        case REMOVE_FAV:
            return {

                ...state,
                myFavorites: action.payload,
                allCharactersFav: action.payload
            }

        case FILTER:
            if (action.payload === 'All') {
                return {
                    ...state,
                    myFavorites: state.allCharactersFav,
                }
            }

            let allCharactersFavFiltered = state.allCharactersFav.filter(
                char => char.gender === action.payload);

            return {
                ...state,
                myFavorites: allCharactersFavFiltered,
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav];

            return {
                ...state,
                myFavorites:
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