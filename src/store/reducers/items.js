import {CREATE_ITEM, REMOVE_ITEM, EDIT_ITEM, CLEAR_STORE} from '../actions/actionType'

const InitialState = {
	array: [],
	category: ["", "tea", "coffe", "juice", "whiskey", "beer", "something alse"],
	inputsName: ["Name", "Description", "Cost"],
};

export function itemsReducer(state = InitialState, action) {
	switch (action.type) {
		case CREATE_ITEM:
			return { ...state, array: action.payload };
		case REMOVE_ITEM:
			return { ...state, array: action.payload };
		case EDIT_ITEM:
			return { ...state, array: action.payload };
		case CLEAR_STORE:
			return { ...state, array: action.payload };

		default:
			return state;
	}
}