window.WebSocket = require("ws");

const Web3 = require("web3");

// TODO: Прокинуть конфигурацию из truffle.js
const defaultHost = "ws://127.0.0.1:8545";
window.web3ws = new Web3(new Web3.providers.WebsocketProvider(defaultHost));
window.web3 = window.web3ws;
