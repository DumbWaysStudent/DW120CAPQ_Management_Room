import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    room: []
};

export default function reducerRoom(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_ROOM}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_USERS_ROOM}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                room: action.payload.data
            };

        case `${types.GET_USERS_ROOM}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   