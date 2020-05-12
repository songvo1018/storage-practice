import {CREATE_ITEM, REMOVE_ITEM} from '../actions/actionType'
import arrayCards from './arrayCards'

const InitialState = {
	// array: arrayCards,
	array: []
};

export function itemsReducer(state = InitialState, action) {
	switch (action.type) {
		case CREATE_ITEM:
			return { ...state, array: action.payload };
		case REMOVE_ITEM:
			return { ...state, array: action.payload };

		default:
			return state;
	}
}