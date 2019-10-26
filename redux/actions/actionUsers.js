import * as types from './../types'
import axios from 'axios'

export const handleLogin = (params) => ({
    type: types.GET_USERS_LOGIN,
    payload: axios.post('http://192.168.43.15:5000/api/v2/login', params)
});

export const getRoom = () => ({
    type: types.GET_USERS_ROOM,
    payload: axios.get('http://192.168.43.15:5000/api/v2/rooms')
});

export const insertRoom = (params) => ({
    type: types.INSERT_USERS_ROOM,
    payload: axios.post('http://192.168.43.15:5000/api/v2/rooms', params)
});

export const updateRoom = (params, body) => ({
    type: types.UPDATE_USERS_ROOM,
    payload: axios.post('http://192.168.43.15:5000/api/v2/rooms/' + params + '/', body)
});

export const getcustomer = (params) => ({
    type: types.GET_USERS_CUSTOMER,
    payload: axios.get('http://192.168.43.15:5000/api/v2/customers', params)
});

