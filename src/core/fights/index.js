/** Fights
 * @module core/fights
 */

/**
 * @typedef {Object} Player
 * @property {string} address
 * @property {number} hp
 * @property {number} totalHp
 */

/**
 * @typedef {Object} Fight
 * @property {string} address
 * @property {Player} players.left
 * @property {Player} players.right
 * @property {string} currentTurn - address of turning player
 */

/**
  * @typedef {Object} Turn
  * @property {Array} actions
  * @property {number} block - block number of turn
  * @property {number} dHp.left - left player's hp change
  * @property {number} dHp.right - right player's hp change
  */

/**
 * @typedef {Object} Action
 * @property {string} address - action's address
 * @property {string} defence - ()
 */

import EventEmitter from "events";

// TODO: Убрать относительный путь
import ClubFighters from "../../../build/contracts/ClubFighters.json";
import Fight from "../../../build/contracts/Fight.json";
import getWeb3 from "../utils/getWeb3";
import * as accounts from "../accounts";

async function game() {
	const { web3 } = await getWeb3();
	const networkId = await web3.eth.net.getId();
	return new web3.eth.Contract(
		ClubFighters.abi,
		ClubFighters.networks[networkId].address
	);
}

/**
 * create - Creates a fight
 *
 * @async
 * @return {}  New fight's contract address
 */
export async function create(options = {}) {
	const clubFighters = await game();
	const account = options.from || await accounts.defaultAccount();
	const {
		events: {
			FightCreated: {
				returnValues: {
					_fightAddress: address
				}
			}
		}
	} = await clubFighters.methods.createFight()
		.send({ from: account });

	let events = new EventEmitter();

	return {
		address,
		events: {
			on: () => {}
		}
	};
}

/**
 * join - Joins a fight by it's address
 * @async
 * @param  {string} address fight's contract address
 */
export async function join(address, options = {}) {

}

/**
 * find - Returns fight object
 * @async
 * @param  {string} address description
 * @return {Fight} Fight object
 */
export async function find(address) {
	const { web3 } = await getWeb3();
	const fight = new web3.eth.Contract(
		Fight.abi,
		address
	);
	return Promise.all({
		address,
		players: {
			left: await fight.playerLeft.call()
		}
	});
}

export async function subscribe(address) {
	// const fight = await getFight(address);
}

export async function turn(address, actions) {

}
