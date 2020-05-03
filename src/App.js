import React, {Component} from 'react';
import {connect} from 'react-redux'
import Layout from './containers/layout/Layout';
import { createItem } from './store/actions/items';


class App extends Component {
  render() {
    const {user, arr} = this.props
    
    
    
    return (
			<div>
				{user ? <span>User not auth</span> : <span>User not auth</span>}
				<Layout arr={arr} auth={user.isAuthenticated}/>
			</div>
		);
    
  }
}

const mapStateToProps = store => {
  return {
    user : store.user,
    array: store.item.arr
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createItemAction: array => dispatch(createItem(array))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
