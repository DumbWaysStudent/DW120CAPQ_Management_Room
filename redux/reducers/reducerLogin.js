import * as types from './../types'

const initialState = {
    status: 'ok',
    isLoading: false,
    isError: false,
    isSuccess: false,
    login: []
};

export default function reducerLogin(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_LOGIN}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_LOGIN}_FULFILLED`:
            //console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                login: action.payload.data
            };

        case `${types.GET_USERS_LOGIN}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   