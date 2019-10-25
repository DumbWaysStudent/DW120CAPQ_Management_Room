import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    creation: []
};

export default function reducerEpisode(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_CREATION}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_CREATION}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                creation: action.payload.data
            };

        case `${types.GET_USERS_CREATION}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   