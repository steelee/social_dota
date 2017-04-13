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

const instances = (state = {}, action) =>{
	switch (action.type){
		case types.SET_INSTANCES:
			return {...state, instance_data: action.data}
		default:
			return state
	}
}

const loading = (state = {}, action) =>{
	switch (action.type){
		case types.INSTANCE_LOADING_ICON:
			console.log("Flipping to ", action.data)
			return {...state, instances_loader: action.data}
		default:
			return state
	}
}
const ReducerPrime = combineReducers({
	applicationStatus,
	instances,
	loading,
	routing
});

export default ReducerPrime;
