import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    srcmyfavourite: []
};

export default function reducerSrcMyFavourite(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_SRC_MYFAVOURITE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_SRC_MYFAVOURITE}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                srcmyfavourite: action.payload.data
            };

        case `${types.GET_USERS_SRC_MYFAVOURITE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   