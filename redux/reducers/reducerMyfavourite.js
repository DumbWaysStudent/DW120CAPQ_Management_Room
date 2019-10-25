import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    myfovourite: []
};

export default function reducerMyfavourite(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_MYFAVOURITE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_MYFAVOURITE}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                myfovourite: action.payload.data
            };

        case `${types.GET_USERS_MYFAVOURITE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   