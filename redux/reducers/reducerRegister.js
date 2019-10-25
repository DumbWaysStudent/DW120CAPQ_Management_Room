import * as types from './../types'

const initialState = {
    status: 'ok',
    isLoading: false,
    isError: false,
    isSuccess: false,
    register: []
};

export default function reducerRegister(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_REGISTER}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_REGISTER}_FULFILLED`:
            //console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                register: action.payload.data
            };

        case `${types.GET_USERS_REGISTER}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   