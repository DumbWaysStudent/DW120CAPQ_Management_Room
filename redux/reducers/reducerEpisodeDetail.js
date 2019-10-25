import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    detail: []
};

export default function reducerEpisodeDetail(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_EPISODE_DETAIL}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_EPISODE_DETAIL}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                detail: action.payload.data
            };

        case `${types.GET_USERS_EPISODE_DETAIL}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   