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
    
		// return <div className="list-group-horizontal list_items">{listItems}</div>;
		return <div className="list-group-horizontal list_items">{listItems}</div>;
	}

	showCreateItem = () => {
		let show = !!this.state.showCreateItem;
		return this.setState({
			showCreateItem: !show,
		});
	}

	createItemButton(text) {
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

	clearStoreButton(text) {
		let isClear = this.props.array[0]

		let clearStorage = () => {
			localStorage.clear();
			let emptyArray = []
			
			this.props.clearStoreAction(emptyArray);
		}
		let btn = (text) => 
		<button
				onClick={() => clearStorage()}
				style={{ 
					backgroundColor: "#ff5e26",
					border:"none", 
					color: 'white'}}
			>
				{text}
			</button>
		return (
			isClear ? btn(text) : null
		);
	}

	logOutButton(text) {
		let isAuth = this.props.auth;
		let logOut = () => {
			if (isAuth) {
				this.props.changeAuthAction(!isAuth);
			}
		}
		let btn = (text) => <button
				onClick={() => logOut()}
				style={{
					backgroundColor: "#ff5e26",
					border:"none",
					color: "white",
				}}
			>
			{text}
			</button>
		return (
				isAuth ? btn(text) : null
		);
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
						<h2 style={{color:"white"}}>Your storage</h2>

						<Auth />

						{this.createItemButton("Create Item")}

						{this.clearStoreButton("Clear Store")}

						{this.logOutButton("Log out")}
					</div>

					<div style={{ margin: "5px 10px" }}>
						{itemsOnStore ? this.renderItems() : this.eptyStore()}
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