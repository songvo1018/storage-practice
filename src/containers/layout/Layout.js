import React, { Component } from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import { connect } from 'react-redux'
import ModalCreate from "../../components/Modal/ModalCreate";
import './Layout.css'
import Auth from '../../components/Auth/Auth'

class Layout extends Component {
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

	CreateItemButton(text) {
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
					{text}
				</button>
			);
		}
	}

	ClearStoreButton(text, isClear) {
		let clearStorage = () => {
			localStorage.clear();
		}
		return (
			<button onClick={()=> clearStorage()}>
				{isClear ? 'Store has been clean' : text}
			</button>
		)
	}

	render() {
		const isClear = false;
		return (
			<div className="container">
				<div className="head">
					<h2>Your items on store</h2>

					<Auth />

					{this.CreateItemButton("Create Item")}
					{this.ClearStoreButton('Clear Store', isClear)}
				</div>

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