import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './layout/Layout';


class App extends Component {
  render() {
    const {user, arr} = this.props
    
    return (
			<div>
				{user ? <span>User not auth</span> : <span>User not auth</span>}
				<Layout arr={arr} />
			</div>
		);
    
  }
}

const mapStateToProps = store => {
  return {
    user : store.user,
    arr: store.item
  }
}

export default connect(mapStateToProps)(App)
