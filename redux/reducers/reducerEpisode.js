import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    episode: []
};

export default function reducerEpisode(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_EPISODE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_EPISODE}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                episode: action.payload.data
            };

        case `${types.GET_USERS_EPISODE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   