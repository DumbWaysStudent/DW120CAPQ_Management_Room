//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from './../../navigator/RootNavigator'
import reducerTodos from './../reducers/reducerTodos';
import reducerUsers from './../reducers/reducerUsers';
import reducerFavourite from './../reducers/reducerFavourite';
import reducerSearch from './../reducers/reducerSearch';
import reducerEpisode from './../reducers/reducerEpisode';
import reducerEpisodeDetail from './../reducers/reducerEpisodeDetail';
import reducerLogin from './../reducers/reducerLogin';
import reducerRegister from './../reducers/reducerRegister';
import reducerCreation from './../reducers/reducerCreation';
import reducerCreate from './../reducers/reducerCreate';
import reducerCreateDetail from './../reducers/reducerCreateDetail';
import reducerProfile from './../reducers/reducerProfile';
import reducerMyfavourite from './../reducers/reducerMyfavourite';
import reducerSrcMyFavourite from './../reducers/reducerSrcMyFavourite';
import reducerDeleteMyFav from './../reducers/reducerDeleteMyFav';
import reducerInsertMyFav from './../reducers/reducerInsertMyFav';

import reducerSaveDetail from './../reducers/reducerSaveDetail';
import reducerSaveEps from './../reducers/reducerSaveEps';
import reducerSaveWebtoon from './../reducers/reducerSaveWebtoon';

const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router: reducerRouter,
  todos: reducerTodos,
  users: reducerUsers,
  favourite: reducerFavourite,
  search: reducerSearch,
  episode: reducerEpisode,
  episodeDetail: reducerEpisodeDetail,
  login: reducerLogin,
  register: reducerRegister,
  creation: reducerCreation,
  create: reducerCreate,
  createDetail: reducerCreateDetail,
  profile: reducerProfile,
  myfavourite: reducerMyfavourite,
  mysrcfavourite: reducerSrcMyFavourite,
  deletemyfav: reducerDeleteMyFav,
  insertmyfav: reducerInsertMyFav,
  saveDetail: reducerSaveDetail,
  saveEps: reducerSaveEps,
  saveWebtoon: reducerSaveWebtoon
})

export default appReducer