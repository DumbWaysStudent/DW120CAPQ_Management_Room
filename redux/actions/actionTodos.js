import * as types from './../types'

export const handleGetTodos = () => ({
  type: types.GET_TODOS,
  payload: { nama: [{ name: 'panji gumilar' }] }
});
