import * as types from './../types'

const initialState = {
    createdetail: [],
    createEps: []
};

export default function reducerCreateDetail(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS_CREATE_DETAIL:
            state.createdetail = action.payload;
            return {
                ...state,
            };
        case types.GET_USERS_DATA_PROFILE:
            state.createEps.push(action.payload)
            state.createdetail = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}