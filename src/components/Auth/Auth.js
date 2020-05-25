import React, { Component } from 'react'
import { connect } from 'react-redux'

import {changeAuth} from "../../store/actions/user";

import './Auth.css'

// style={{ marginTop: "10px" }}

class Auth extends Component {
	viewAuth() {
		if (this.props.auth) {
			return (
				<div>
					<h5 className="title" >You logged in</h5>
				</div>
			);
		} else {
			return (
				<div>
					<h5 className="title">
						{this.props.auth ? " You logged in" : " Log in? "}
						<input
							type="checkbox"
							name="auth"
							id="auth"
							onClick={() => {
								let auth = !this.props.auth;
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