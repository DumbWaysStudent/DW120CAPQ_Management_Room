import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    saveWebtoon: []
};

export default function reducerSaveWebtoon(state = initialState, action) {
    switch (action.type) {
        case `${types.SAVE_USERS_WEBTOON}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.SAVE_USERS_WEBTOON}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                saveWebtoon: action.payload.data
            };

        case `${types.SAVE_USERS_WEBTOON}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   