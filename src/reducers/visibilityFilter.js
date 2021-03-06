import { VISIBILITY_FILTER } from "../constants/index";
import { SET_FILTER } from "../actions/actionTypes";

const initialState = VISIBILITY_FILTER.ALL;

const visibilityFilter = (state = initialState, action) => {
	switch(action.type) {
		case SET_FILTER: {
			// return action.payload.filter;
			let { filter } = action.payload;
			return filter;
		}
		default: 
			return state;
	}
};


export default visibilityFilter;
