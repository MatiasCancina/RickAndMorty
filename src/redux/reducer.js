import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
    myFavourites: [],
    allCharactersFav: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.allCharactersFav, action.payload],
                allCharactersFav: [...state.allCharactersFav, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter(
                    char => char.id !== Number(action.payload))
            }

        case FILTER:
            if(action.payload === 'all'){
                return{
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
                    action.payload === "A"
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