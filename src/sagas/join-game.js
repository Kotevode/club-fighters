import {
	takeLatest, call, put, fork
} from "redux-saga/effects";
import { push } from "connected-react-router";
import { constants, actions } from "actions/join-game";
import { Fights } from "core";
import { registerFightEventChannel } from "./fight";

function* joinGame(action) {
	try {
		const { address } = action.payload;
		const { events } = yield call(Fights.join, address);
		yield fork(registerFightEventChannel, events);
		yield put(push("/fight"));
	} catch (errorMessage) {
		yield put(actions.joinGameFail(errorMessage));
	}
}

export default function* joinGameSaga() {
	yield takeLatest(constants.JOIN_GAME, joinGame);
}
