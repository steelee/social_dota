'use_strict'

import React, { Component  } from 'react';
import { AppRegistry, Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import { connect  } from 'react-redux';
import { Card  } from 'react-native-material-design';
import * as types from '../types';

var CryptoJS = require("crypto-js");

const styles = StyleSheet.create({
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,

	}
});

class Instances extends Component {
	componentWillMount(){
		this.props.getInstances();
	}
	render() {
		const {instances, loading} = this.props;
		return (
			<View>
			{loading && (
				<ActivityIndicator
				style={{ height: 80  }}
				color="#C00"
				size="large"
				/>
			)}
			<Text style={[styles.centering]}>
			OUR INSTANCES:
			</Text>
			{instances.map(instance => (
				<Text key={instance.title}>{instance.title}, {instance.releaseYear}</Text>
			))}
			</View>
		);
	}
}

function mapStatetoProps(state){
	return {
		instances: state.instances.instance_data,
		loading: state.loading.instances_loader
	};
}

const mapDispatchtoProps = dispatch => ({
	getInstances: () =>{
		dispatch({type: types.INSTANCE_LOADING_ICON, data:true})
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				dispatch({type: types.SET_INSTANCES, data: responseJson.movies})
				dispatch({type: types.INSTANCE_LOADING_ICON, data:false})
			})
			.catch((error) => {
				console.error(error);
			});
	},
})
export default connect(mapStatetoProps, mapDispatchtoProps)(Instances);
