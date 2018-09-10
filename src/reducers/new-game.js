import { constants } from "actions/new-game";

const initialState = {
	loading: false,
	address: "",
	errorMessage: ""
};

export default function(state = initialState, action) {
	switch (action.type) {
	case constants.CREATE_GAME: {
		return {
			loading: true,
			errorMessage: ""
		};
	}
	case constants.CREATE_GAME_SUCCESS: {
		const { address } = action.payload;
		return {
			loading: false,
			address
		};
	}
	case constants.CREATE_GAME_FAIL: {
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
