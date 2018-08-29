import Web3 from "web3";

export default () => new Promise((resolve) => {
	if (window.web3) {
		resolve({ web3: window.web3 });
	} else {
		window.addEventListener("load", () => {
			let results;
			let { web3 } = window;

			// Checking if Web3 has been injected by the browser (Mist/MetaMask)
			if (typeof web3 !== "undefined") {
				// Use Mist/MetaMask's provider.
				web3 = new Web3(web3.currentProvider);

				results = {
					web3
				};

				resolve(results);
			}
		});
	}
});
