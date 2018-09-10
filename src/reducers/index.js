import { combineReducers } from "redux";
import newGame from "./new-game";
import joinGame from "./join-game";

export default combineReducers({
	newGame,
	joinGame
});
