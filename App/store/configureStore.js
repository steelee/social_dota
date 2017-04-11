import { createStore, applyMiddleware, compose   } from 'redux';
import { routerMiddleware   } from 'react-router-redux';
import thunk from 'redux-thunk';
import ReducerPrime from '../reducer';

export default function configureStore(initState){
	const middleware = [thunk];
	let store;
	store = createStore(ReducerPrime, initState, applyMiddleware(...middleware));
	return store;
}
