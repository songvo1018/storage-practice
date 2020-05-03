import React, { Component } from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import './Layout.css'
import Auth from '../../components/Auth/Auth'
import CreateItem from '../../components/CreateItem/CreateItem'
import { connect } from 'react-redux'

class Layout extends Component {

  state = {

      isAuthenticated: this.props.auth,
      showCreateItem: false
  }

  renderItems() {
    const  arr  = this.props.arr;

    const numbers = arr;
    const listItems = numbers.map((number) =>
      <ItemCard key ={ number.id + '-item'}data = {number} /> 
    );
    return (
      <ul>{listItems}</ul>
    );
    }

  showCreateItem() {
    let show = !!this.state.showCreateItem
    return (
      this.setState({
        showCreateItem: !show
      })
    )
  }
  render() {
    const {auth} = this.props
    return (
			<div>
				<div className="header">
					<h2>Your items on store</h2>
					<Auth />
					<button
						onClick={() => {
							auth ? this.showCreateItem() : alert('not auth')
						}}
					>
						Create Item
					</button>
				</div>
				
        {this.state.showCreateItem ? <CreateItem /> : null}

				<div className="list-item">{this.renderItems()}</div>
			</div>
		);
  }
}

const mapStateToProps = (store) => {
	return {
		auth: store.user.isAuthenticated,
		arr: store.item.arr,
	};
};

export default connect(mapStateToProps)(Layout)