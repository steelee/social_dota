import React, { Component  } from 'react';
import { AppRegistry, Text} from 'react-native';
import { connect  } from 'react-redux';
import { Card  } from 'react-native-material-design';


class Info extends Component {
	render() {
		const {status} = this.props;
		return (
			<Text>
			Current Version: {status}
			</Text>
		);
	}
}

function mapStatetoProps(state){
	return {
		status: state.applicationStatus,
	};
}
export default connect(mapStatetoProps)(Info);
