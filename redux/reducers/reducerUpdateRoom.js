import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    update: []
};

export default function reducerUpdateRoom(state = initialState, action) {
    switch (action.type) {
        case `${types.UPDATE_USERS_ROOM}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.UPDATE_USERS_ROOM}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                update: action.payload.data
            };

        case `${types.UPDATE_USERS_ROOM}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   