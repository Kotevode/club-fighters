import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Web3Provider } from 'react-web3'

import App from './App'
import configureStore from './store'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

if (module.hot) module.hot.accept();
