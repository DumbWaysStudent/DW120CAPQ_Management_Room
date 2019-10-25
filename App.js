import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import RootNavigator from './navigator/RootNavigator';
import { store } from './redux/store';

const AppNav = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.router
});

const AppWithNavigationState = connect(mapStateToProps)(AppNav);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}