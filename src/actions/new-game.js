import { async, createTypes, actionCreator } from "redux-action-creator";

// Constants
export const constants = createTypes([ ...async("CREATE_GAME") ]);

// Action creators
export const actions = {
	createGame: actionCreator(constants.CREATE_GAME),
	createGameSuccess: actionCreator(constants.CREATE_GAME_SUCCESS, "address"),
	createGameFail: actionCreator(constants.CREATE_GAME_FAIL, "errorMessage")
};
