import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    profile: []
};

export default function reducerProfile(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_PROFILE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_PROFILE}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                profile: action.payload.data
            };

        case `${types.GET_USERS_PROFILE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   