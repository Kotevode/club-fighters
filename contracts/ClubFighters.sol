pragma solidity ^0.4.24;

import "./Fight.sol";

contract ClubFighters {
	address public owner;

	event FightCreated(address _fightAddress);

	constructor() public {
		owner = msg.sender;
	}

	function createFight() external returns (address) {
		address newFight = new Fight(msg.sender);
		emit FightCreated(newFight);
		return newFight;
	}
}
