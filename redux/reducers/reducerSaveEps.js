import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    saveEpisode: []
};

export default function reducerSaveEps(state = initialState, action) {
    switch (action.type) {
        case `${types.SAVE_USERS_EPISODE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.SAVE_USERS_EPISODE}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                saveEpisode: action.payload.data
            };

        case `${types.SAVE_USERS_EPISODE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   