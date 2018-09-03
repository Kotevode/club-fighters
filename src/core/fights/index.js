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

import * as contracts from "../contracts";
import * as accounts from "../accounts";

/**
 * join - Joins a fight by it's address
 * @async
 * @param  {string} address fight's contract address
 */
export async function join(address, options = {}) {
	const fight = await contracts.Fight(address);
	const account = options.from || await accounts.defaultAccount();
	await fight.join({ from: account });
}

/**
 * find - Returns fight object
 * @async
 * @param  {string} address description
 * @return {Fight} Fight object
 */
export async function find(address) {
	const fight = await contracts.Fight(address);
	const playerLeft = await fight.playerLeft.call();
	const playerRight = await fight.playerRight.call();
	return {
		address,
		players: {
			left: {
				address: playerLeft
			},
			right: {
				address: playerRight
			}
		}
	};
}

/**
 * create - Creates a fight
 *
 * @async
 * @return {}  New fight's contract address
 */
export async function create(options = {}) {
	const clubFighters = await contracts.Game();
	const account = options.from || await accounts.defaultAccount();
	const { logs: [fightCreated] } = await clubFighters.createFight({ from: account });
	const address = fightCreated.args._fightAddress;
	const fight = await contracts.Fight(address);
	const events = new EventEmitter();
	fight.FightStarted()
		.on("data", event => events.emit("FIGHT_STARTED", { address: event.address }));
	return {
		address,
		events
	};
}

export async function turn(address, actions) {

}
