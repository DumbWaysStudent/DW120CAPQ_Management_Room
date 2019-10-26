import * as types from './../types'
import axios from 'axios'


export const handleGetUsers = () => ({
    type: types.GET_USERS,
    payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons/')
});


export const handleGetFav = () => ({
    type: types.GET_USERS_FAV,
    payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons/')
});

export const handleSearch = (params) => ({
    type: types.GET_USERS_SEARCH,
    payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons/find/' + params)
});

export const handleEpisode = (params) => ({
    type: types.GET_USERS_EPISODE,
    payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons/' + params + '/episodes')
});

export const handleEpisodeDetail = (webtoonId, episodesId) => {
    return {
        type: types.GET_USERS_EPISODE_DETAIL,
        payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons/' + webtoonId + '/episode/' + episodesId + '')
    }
};

export const handleLogin = (params) => ({
    type: types.GET_USERS_LOGIN,
    payload: axios.post('http://192.168.43.15:5000/api/v2/login', params)
});

export const handleRegister = (params) => ({
    type: types.GET_USERS_REGISTER,
    payload: axios.post('http://192.168.43.15:5000/api/v2/register', params)
});

export const handleCreation = () => ({
    type: types.GET_USERS_CREATION,
    payload: axios.get('http://192.168.43.15:5000/api/v2/users/1/webtoons/')
});

export const handleCreate = () => {
    return {
        type: types.GET_USERS_CREATE,
        payload: axios.get('http://192.168.43.15:5000/api/v2/users/1/webtoons/')
        //payload: axios.post('http://192.168.43.15:5000/api/v2/users/1/webtoon', body)
    };
};

export const handleCreateDetail = (params) => ({
    type: types.GET_USERS_CREATE_DETAIL,
    payload: params
});

export const handleDataDetail = (params) => ({
    type: types.GET_USERS_DATA_PROFILE,
    payload: params
});

export const handleProfile = () => {
    return {
        type: types.GET_USERS_PROFILE,
        payload: axios.get('http://192.168.43.15:5000/api/v2/users/1/webtoons/')
        //payload: axios.post('http://192.168.43.15:5000/api/v2/users/1/webtoon', body)
    };
};

export const handleMyfavourite = (params) => {
    return {
        type: types.GET_USERS_MYFAVOURITE,
        payload: axios.get('http://192.168.43.15:5000/api/v2/users/' + params + '/favourite')
    };
};

export const handleSrcMyfavourite = (id, params) => {
    return {
        type: types.GET_USERS_SRC_MYFAVOURITE,
        payload: axios.get('http://192.168.43.15:5000/api/v2/users/' + id + '/favourite/' + params + '/find')
    };
};


export const handleInsertMyfavourite = (params) => {
    return {
        type: types.GET_USERS_MYFAVOURITE_INSERT,
        payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons/')
    };
};

export const handleDeleteMyfavourite = (params) => {
    return {
        type: types.GET_USERS_MYFAVOURITE_DELETE,
        payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons')
    };
};


export const handleSaveDetailEps = () => {
    return {
        type: types.SAVE_USERS_DETAIL,
        payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons')
    };
};

export const handleSaveEps = () => {
    return {
        type: types.SAVE_USERS_EPISODE,
        payload: axios.get('http://192.168.43.15:5000/api/v2/webtoons')
    };
};

export const handleSaveWebtoon = (params) => {
    return {
        type: types.SAVE_USERS_WEBTOON,
        payload: axios.post('http://192.168.43.15:5000/api/v2/users/1/webtoon', params)
    };
}; 