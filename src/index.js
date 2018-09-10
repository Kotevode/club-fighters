import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Web3Provider } from "react-web3";

import Router from "./routes";
import configureStore from "./store";

const store = configureStore();

const Web3 = require("web3");

window.web3 = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545"));

ReactDOM.render(
	<Web3Provider>
		<Provider store={store}>
			<Router />
		</Provider>
	</Web3Provider>,
	document.getElementById("root")
);

if (module.hot) module.hot.accept();
