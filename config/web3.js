const Web3 = require("web3");

// TODO: Прокинуть конфигурацию из truffle.js
const defaultHost = "http://127.0.0.1:8545";
window.web3 = new Web3(new Web3.providers.HttpProvider(defaultHost));
