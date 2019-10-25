import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    search: []
};

export default function reducerSearch(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_SEARCH}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_USERS_SEARCH}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                search: action.payload.data
            };

        case `${types.GET_USERS_SEARCH}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}    