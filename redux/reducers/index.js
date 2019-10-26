//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from './../../navigator/RootNavigator'
import reducerLogin from './../reducers/reducerLogin';

import reducerRoom from './../reducers/reducerRoom';
import reducerInsertRoom from './../reducers/reducerInsertRoom';
import reducerUpdateRoom from './../reducers/reducerUpdateRoom';

import reducerCustomer from './../reducers/reducerCustomer';

import reducerUsers from './../reducers/reducerUsers';

//import reducerSearch from './../reducers/reducerSearch'; 
// import reducerEpisode from './../reducers/reducerEpisode';
// import reducerEpisodeDetail from './../reducers/reducerEpisodeDetail';

// import reducerRegister from './../reducers/reducerRegister';
// import reducerCreation from './../reducers/reducerCreation';
// import reducerCreate from './../reducers/reducerCreate';
// import reducerCreateDetail from './../reducers/reducerCreateDetail';
// import reducerProfile from './../reducers/reducerProfile';
// import reducerMyfavourite from './../reducers/reducerMyfavourite';
// import reducerSrcMyFavourite from './../reducers/reducerSrcMyFavourite';
// import reducerDeleteMyFav from './../reducers/reducerDeleteMyFav';
// import reducerInsertMyFav from './../reducers/reducerInsertMyFav';

// import reducerSaveDetail from './../reducers/reducerSaveDetail';
// import reducerSaveEps from './../reducers/reducerSaveEps';
// import reducerSaveWebtoon from './../reducers/reducerSaveWebtoon';

const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router: reducerRouter,
  login: reducerLogin,
  room: reducerRoom,
  insertroom: reducerInsertRoom,
  updateroom: reducerUpdateRoom,
  customer: reducerCustomer
})

export default appReducer