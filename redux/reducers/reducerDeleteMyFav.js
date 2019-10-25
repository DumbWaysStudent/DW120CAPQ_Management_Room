import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    deletemyfavourite: []
};

export default function reducerDeleteMyFav(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_MYFAVOURITE_DELETE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_MYFAVOURITE_DELETE}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                deletemyfavourite: action.payload.data
            };

        case `${types.GET_USERS_MYFAVOURITE_DELETE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   