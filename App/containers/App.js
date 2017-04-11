import React, { Component  } from 'react';
import { AppRegistry, Text  } from 'react-native';
import { connect  } from 'react-redux';

import Info from './Info'

class App extends Component {
	render() {
		const {status} = this.props;
		return (
			<Text>
			<Info />
			</Text>
		);
	}
}

export default App;
