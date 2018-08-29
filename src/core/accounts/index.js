import getWeb3 from "../utils/getWeb3";

export async function all() {
	const { web3 } = await getWeb3();
	return web3.eth.getAccounts();
}

export async function defaultAccount() {
	return all().then(accounts => accounts[0]);
}
