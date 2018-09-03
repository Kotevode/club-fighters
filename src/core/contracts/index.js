import contract from "truffle-contract";

import ClubFightersJSON from "../../../build/contracts/ClubFighters.json";
import FightJSON from "../../../build/contracts/Fight.json";

export const Game = async () => {
	const c = contract(ClubFightersJSON);
	c.setProvider(window.web3.currentProvider);
	return c.deployed();
};

export const Fight = async (address) => {
	const c = contract(FightJSON);
	c.setProvider(window.web3.currentProvider);
	return c.at(address);
};
