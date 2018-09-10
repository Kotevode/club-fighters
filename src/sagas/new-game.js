import {
	takeLatest, call, put, fork
} from "redux-saga/effects";
import { actions, constants } from "actions/new-game";
import { Fights } from "core";
import { registerFightEventChannel } from "./fight";

function* createGame() {
	try {
		const { address, events } = yield call(Fights.create);
		yield put(actions.createGameSuccess(address));
		yield fork(registerFightEventChannel, events);
	} catch (errorMessage) {
		yield put(actions.createGameFail(errorMessage));
	}
}

export default function* newGameSaga() {
	yield takeLatest(constants.CREATE_GAME, createGame);
}
