import React, { Component } from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import { connect } from 'react-redux'
import ModalCreate from "../../components/Modal/ModalCreate";
import './Layout.css'
import Auth from '../../components/Auth/Auth'
import {clearStore} from '../../store/actions/items'

import { changeAuth } from "../../store/actions/user";
import ModalLogOut from '../../components/Modal/ModalLogOut';

class Layout extends Component {
	renderItems() {
		let listItems = this.props.array.map((item) => {
			return <ItemCard key={item.id + "-item"} data={item} />;
		});
    
		return <div className="list-group-horizontal">{listItems}</div>;
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
				<ModalLogOut text={text}/>
			);
		}
	}

	ClearStoreButton(text) {
		let isClear = this.props.array[0]

		let clearStorage = () => {
			localStorage.clear();
			let emptyArray = []
			let isAuth = this.props.auth
			this.props.changeAuthAction(!isAuth);
			this.props.clearStoreAction(emptyArray);
		}
		return (
			<button onClick={()=> clearStorage()}>
				{isClear ? text  : 'Store has been clean' }
			</button>
		)
	}

	eptyStore () {
		return (
			<div className="empty-store">
				<h2>Your store is empty, create something!</h2>
			</div>
		);
	}

	render() {
		let itemsOnStore = this.props.array[0]
		return (
			<div className="wrap">
				<div className="container">
					<div className="head">
						<h2>Your items on store</h2>

						<Auth />

						{this.CreateItemButton("Create Item")}
						{this.ClearStoreButton("Clear Store and logout")}
					</div>

					<div style={{margin: "5px 10px"}}>
						{
							itemsOnStore 
							?	this.renderItems()
							:	this.eptyStore()
						}
					</div>
				</div>
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

const mapDispatchToProps = (dispatch) => {
	return {
		clearStoreAction: (array) => dispatch(clearStore(array)),
		changeAuthAction: (auth) => dispatch(changeAuth(auth)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout)