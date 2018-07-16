const SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract("SimpleStorage", (accounts) => {
	it("...should store the value 89.", () => SimpleStorage.deployed().then((instance) => {
		simpleStorageInstance = instance;

		return simpleStorageInstance.set(89, { from: accounts[0] });
	}).then(() => simpleStorageInstance.get.call()).then((storedData) => {
		assert.equal(storedData, 89, "The value 89 was not stored.");
	}));
});
