import * as types from './../types'

const initialState = {
  todos: [

  ]
};

export default function reducerTodos(state = initialState, action) {
  switch (action.type) {
    case types.GET_TODOS:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}