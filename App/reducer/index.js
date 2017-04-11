import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as types from '../types';

const applicationStatus = (state = types.Status, action) => {
	switch (action.type){
		case types.SET_STATUS_FILTER:
			return action.status
		default:
			return state
	}
}

const ReducerPrime = combineReducers({
	applicationStatus,
	routing
});

export default ReducerPrime;
