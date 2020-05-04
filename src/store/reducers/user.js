import { CHANGE_AUTH } from "../actions/actionType";

const InitialState = {
	isAuth: true
};

export function userReducer(state = InitialState, action) {
	switch (action.type) {
		case CHANGE_AUTH:
			return { ...state, isAuth: action.payload };

		default:
			return state;
	}
}