import React, { Component  } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import { connect  } from 'react-redux';
import { Card  } from 'react-native-material-design';

var styles = StyleSheet.create({
	container: {
		    borderRadius: 4,
		    borderWidth: 3,
		    borderColor: '#d6d7da',
		  
	},
	title: {
		    fontSize: 17,
		    fontWeight: 'bold',
		    textAlign: 'center',
		  
	},
	activeTitle: {
		    color: 'red',
		  
	},

});

class Info extends Component {
	render() {
		const {status} = this.props;
		return (
			<View style={styles.container}>
			<Text style={styles.title}>
			Current Version: {status}
			</Text>
			</View>
		);
	}
}

function mapStatetoProps(state){
	return {
		status: state.applicationStatus,
	};
}
export default connect(mapStatetoProps)(Info);
