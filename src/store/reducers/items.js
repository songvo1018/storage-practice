import {CREATE_ITEM, REMOVE_ITEM, EDIT_ITEM} from '../actions/actionType'
// import arrayCards from './arrayCards'

const InitialState = {
	// array: arrayCards,
	array: [],
	category: ["", "tea", "coffe", "hush", "M&M`s"],
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

		default:
			return state;
	}
}