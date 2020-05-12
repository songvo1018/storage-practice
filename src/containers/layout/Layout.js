import React, { Component } from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import { connect } from 'react-redux'
import ModalCreate from "../../components/Modal/ModalCreate";
import './Layout.css'
import Auth from '../../components/Auth/Auth'
import CreateItem from '../../components/CreateItem/CreateItem'


class Layout extends Component {
	constructor() {
		super()
		this.state = { showCreateItem : false}
	}

	renderItems() {
		let item = this.props.array;
		
		let listItems = item.map((item) => {
			return <ItemCard key={item.id + "-item"} data={item} />;
    });
    
		return <ul className="list-group-horizontal">{listItems}</ul>;
	}

	showCreateItem = () => {
		let show = !!this.state.showCreateItem;
		return this.setState({
			showCreateItem: !show,
		});
	}

	buttonHandler() {
    let auth = this.props.auth;

		if (auth) {
      return (
				<ModalCreate showCreateItem={this.props.showCreateItem} />
				
			);
		} else {
      return (
				<button
					onClick={() => {alert("Please, log in ");	}}
				>
					Create Item
				</button>
			);
		}
	}

	render() {
		return (
			<div className="container">
				<div className="head">
					<h2>Your items on store</h2>

					<Auth />

					{this.buttonHandler()}
				</div>

				{this.state.showCreateItem ? (
					<CreateItem showCreateItem={this.showCreateItem} />
				) : null}

				{this.renderItems()}
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		auth: store.user.isAuth,
		array: store.item.array,
	};
};

export default connect(mapStateToProps)(Layout)