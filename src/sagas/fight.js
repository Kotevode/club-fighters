import { eventChannel } from "redux-saga";
import {
	take, takeEvery, put, fork, all
} from "redux-saga/effects";
import { push } from "connected-react-router";
import { events as fightEvents } from "core";

function* serveChannel(channel) {
	while (true) {
		const action = yield take(channel);
		yield put(action);
	}
}

export function* registerFightEventChannel(events) {
	const channel = eventChannel(emmiter => {
		for (const eventKey in fightEvents) {
			events.on(fightEvents[eventKey], payload => {
				emmiter({ type: fightEvents[eventKey], payload });
			});
		}
		return () => {};
	});
	yield fork(serveChannel, channel);
}

function* fightStarted() {
	yield put(push("/fight"));
}

export default function* fightSaga() {
	yield all([
		yield takeEvery(fightEvents.FIGHT_STARTED, fightStarted)
	]);
}
