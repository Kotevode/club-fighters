import { all } from "redux-saga/effects";
import newGame from "./new-game";
import joinGame from "./join-game";
import fight from "./fight";

export default function* rootSaga() {
	yield all([
		newGame(),
		joinGame(),
		fight()
	]);
}
