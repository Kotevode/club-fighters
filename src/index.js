import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Web3Provider } from "react-web3";
import Web3 from "web3";

import Router from "./routes";
import configureStore from "./store";

const store = configureStore();

if (NETWORK.websockets) {
	const { WebsocketProvider } = Web3.providers;
	const provider = new WebsocketProvider(`ws://${NETWORK.host}:${NETWORK.port}`);
	window.web3ws = new Web3(provider);
}

if (window.web3) {
	window.web3 = new Web3(window.web3.currentProvider);
}

ReactDOM.render(
	<Web3Provider>
		<Provider store={store}>
			<Router />
		</Provider>
	</Web3Provider>,
	document.getElementById("root")
);

if (module.hot) module.hot.accept();
