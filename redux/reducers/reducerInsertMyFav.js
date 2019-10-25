import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    insertmyfavourite: []
};

export default function reducerInsertMyFav(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERS_MYFAVOURITE_INSERT}_PENDING`:
            return {
                ...state,
                isLoading: true
            };
        case `${types.GET_USERS_MYFAVOURITE_INSERT}_FULFILLED`:
            console.log('tes');
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                insertmyfavourite: action.payload.data
            };

        case `${types.GET_USERS_MYFAVOURITE_INSERT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
}   