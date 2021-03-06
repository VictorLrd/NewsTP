import React, { Component } from 'react';
import MainTabNavigator from './navigation/MainTabNavigator';
import { Provider } from 'react-redux'
import store from './store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

class App extends Component {
  render() {
    let persistor = persistStore(store)
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainTabNavigator/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
