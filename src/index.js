import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Web3Provider } from "react-web3";
import { Switch, Route } from "react-router-dom";

import { MainMenu, Settings } from "./routes";
import configureStore, { history } from "./store";

const store = configureStore();

ReactDOM.render(
	<Web3Provider>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route path="/settings" component={Settings} />
					<Route exact path="/" component={MainMenu} />
				</Switch>
			</ConnectedRouter>
		</Provider>
	</Web3Provider>,
	document.getElementById("root")
);

if (module.hot) module.hot.accept();
