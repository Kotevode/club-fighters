export async function all() {
	return window.web3.eth.getAccounts();
}

export async function defaultAccount() {
	return all().then(accounts => accounts[0]);
}
