import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    favourite: []
};

export default function reducerTodos(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_FAV}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_USERS_FAV}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                favourite: action.payload.data
            };

        case `${types.GET_USERS_FAV}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   