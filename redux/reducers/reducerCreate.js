import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    create: []
};

export default function reducerCreate(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_CREATE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_CREATE}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                create: action.payload.data
            };

        case `${types.GET_USERS_CREATE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   