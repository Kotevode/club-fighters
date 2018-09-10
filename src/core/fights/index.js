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
import { events as fightEvents } from "../constants";

async function subscribe(address) {
	const fight = await contracts.Fight(address);
	const events = new EventEmitter();
	fight.FightStarted()
		.on("data", event => events.emit(fightEvents.FIGHT_STARTED, { address: event.address }));
	return events;
}

/**
 * join - Joins a fight by it's address
 * @async
 * @param  {string} address fight's contract address
 */
export async function join(address, options = {}) {
	const fight = await contracts.Fight(address);
	const account = options.from || await accounts.defaultAccount();
	await fight.join({ from: account });
	const events = await subscribe(address);
	return {
		address,
		events
	};
}

async function player(address, index) {
	const fight = await contracts.Fight(address);
	const result = await fight.players.call(index);
	result.hp = result.hp.toNumber();
	return result;
}

/**
 * find - Returns fight object
 * @async
 * @param  {string} address description
 * @return {Fight} Fight object
 */
export async function find(address) {
	const playerLeft = await player(address, 0);
	const playerRight = await player(address, 1);
	return {
		address,
		players: {
			left: playerLeft,
			right: playerRight
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
	const events = await subscribe(address);
	return {
		address,
		events
	};
}

/*
export async function turn(address, actions) {

}
*/
