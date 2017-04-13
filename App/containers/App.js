import React, { Component  } from 'react';
import { AppRegistry, Text, View  } from 'react-native';
import { connect  } from 'react-redux';

import Info from './Info'
import Instances from  './Instances'

class App extends Component {
	render() {
		const {status} = this.props;
		return (
			<View>
			<Instances />
			<Info />
			</View>
		);
	}
}

export default App;
