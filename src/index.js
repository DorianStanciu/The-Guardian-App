import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX
import { Provider } from 'react-redux'
// import store from './store'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
