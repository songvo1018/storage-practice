import React, { Component } from 'react'
import './Auth.css'
import { connect } from 'react-redux'
import {changeAuth} from "../../store/actions/user";


class Auth extends Component {
	state = {
		InitialState: this.props.auth,
	};

	changeAuthStatus() {
		let InitialState = !this.state.InitialState
		this.setState({
			InitialState
		});
	}

	viewAuth() {
		if (this.state.InitialState) {
			return <div><h5 style={{marginTop: '10px'}}>You logged in</h5></div>;
		} else {
			return (
				<div>
					<h5 style={{ marginTop: "10px " }}>
						{this.state.InitialState
							? " You logged in"
							: " Log in? "}
					<input
						type="checkbox"
						name="auth"
						id="auth"
						onClick={() => {
							this.changeAuthStatus();
							let auth = !this.state.InitialState;
							this.props.changeAuthAction(auth);
						}}
					/>
					</h5>
				</div>
			);
		}
	}

	render() {		
		return (
			<div>
				{this.viewAuth()}
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		auth: store.user.isAuth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeAuthAction: (auth) => dispatch(changeAuth(auth)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);