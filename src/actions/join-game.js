import { async, createTypes, actionCreator } from "redux-action-creator";

// Constants
export const constants = createTypes([ ...async("JOIN_GAME") ]);

// Action creators
export const actions = {
	joinGame: actionCreator(constants.JOIN_GAME, "address"),
	joinGameSuccess: actionCreator(constants.JOIN_GAME_SUCCESS, "events"),
	joinGameFail: actionCreator(constants.JOIN_GAME_FAIL, "errorMessage")
};
