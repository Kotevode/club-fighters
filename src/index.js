import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Web3Provider } from 'react-web3'

import App from './App'
import store from './store'

ReactDOM.render(
  <Web3Provider>
    <Provider store={store}>
        <App />
    </Provider>
  </Web3Provider>,
  document.getElementById('root')
);
