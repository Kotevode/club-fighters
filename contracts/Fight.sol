pragma solidity ^0.4.24;

contract Fight {
	address public playerLeft;
	address public playerRight;

	constructor(address _playerLeft) public {
		playerLeft = _playerLeft;
	}
}
