import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    saveDetail: []
};

export default function reducerSaveDetail(state = initialState, action) {
    switch (action.type) {
        case `${types.SAVE_USERS_DETAIL}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.SAVE_USERS_DETAIL}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                saveDetail: action.payload.data
            };

        case `${types.SAVE_USERS_DETAIL}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}    