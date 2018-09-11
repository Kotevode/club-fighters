pragma solidity ^0.4.24;

contract Fight {
	struct Player {
		address useraddress;
		uint hp;
	}

	uint MAX_HP = 50;
	uint LEFT = 0;
	uint RIGHT = 1;

	Player[2] public players;

	event FightStarted();

	constructor() public {
		players[LEFT] = Player(tx.origin, MAX_HP);
	}

	function join() external {
		players[RIGHT] = Player(tx.origin, MAX_HP);
		emit FightStarted();
	}

}
