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

	constructor(address _playerLeft) public {
		players[LEFT] = Player(_playerLeft, MAX_HP);
	}

	function join() external {
		players[RIGHT] = Player(msg.sender, MAX_HP);
		emit FightStarted();
	}

}
