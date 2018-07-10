import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createHashHistory'

import reducers from './reducers'
import rootSaga from './sagas'

export default function configureStore() {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	const history = createHistory()
	const loggerMiddleware = createLogger()
	const sagaMiddleware = createSagaMiddleware()
	const routingMiddleware = routerMiddleware(history)

	const store = createStore(
	  	connectRouter(history)(reducers),
	  	composeEnhancers(
	    	applyMiddleware(
	      		routingMiddleware,
	      		sagaMiddleware,
	      		loggerMiddleware,
	    	)
	  	)
	)

	if (module.hot) {
    	// Enable Webpack hot module replacement for reducers
    	module.hot.accept('./reducers', () => {
      		const nextRootReducer = require('./reducers/index').default;
      		store.replaceReducer(nextRootReducer);
    	});
  	}

	sagaMiddleware.run(rootSaga)
	return store
}
