import { constants } from "actions/join-game";

const initialState = {
	loading: false,
	errorMessage: ""
};

export default function(state = initialState, action) {
	switch (action.type) {
	case constants.JOIN_GAME: {
		return {
			loading: true,
			errorMessage: ""
		};
	}
	case constants.JOIN_GAME_FAIL: {
		const { errorMessage } = action.payload;
		return {
			loading: false,
			errorMessage
		};
	}
	default: {
		return state;
	}
	}
}
