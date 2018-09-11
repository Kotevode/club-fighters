import contract from "truffle-contract";

import ClubFightersJSON from "../../../build/contracts/ClubFighters.json";
import FightJSON from "../../../build/contracts/Fight.json";

function build(json, provider = "metamask") {
	const c = contract(json);
	if (provider === "metamask") {
		c.setProvider(window.web3.currentProvider);
	} else if (provider === "ws") {
		c.setProvider(window.web3ws.currentProvider);
	}
	return c;
}


export const Fight = async (address, provider) => build(FightJSON, provider).at(address);
export const Game = async (provider) => build(ClubFightersJSON, provider).deployed();
