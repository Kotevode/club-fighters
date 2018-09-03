pragma solidity ^0.4.24;

contract Fight {
	address public playerLeft;
	address public playerRight;

	event FightStarted();

	constructor(address _playerLeft) public {
		playerLeft = _playerLeft;
	}

	function join() external {
		playerRight = msg.sender;
		emit FightStarted();
	}
}
