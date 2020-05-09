import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './containers/layout/Layout';


class App extends Component {
  render() {
    return (
			<div>
				<Layout />
			</div>
		);
    
  }
}

export default connect()(App)
