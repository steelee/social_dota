import React from 'react'
import { Component  } from 'react-native';
import { Provider  } from 'react-redux';

import App from './containers/App'
import * as types from './types'

import createStore from './store/configureStore.js'

const store = createStore(
	{
		applicationStatus: types.Status.STATUS_DEV
	}
)

const Root = () => {
	return (
		<Provider store={store}>
		<App/>
		</Provider>
	)
}

export default Root 
