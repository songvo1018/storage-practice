import React, { Component } from 'react'
import './Auth.css'
import { connect } from 'react-redux'
import {changeAuth} from "../../store/actions/user";


class Auth extends Component {
  render() {
    const auth = () => {return !this.props.auth}
    return (
			<div className="auth">
				<label htmlFor="auth">
					Auth :{" "}
					<input
						type="checkbox"
						onChange={() => this.props.changeAuthAction(auth())}
					/>
				</label>
			</div>
		);
  }
}

const mapStateToProps = (store) => {
	return {
		auth: store.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeAuthAction: (auth) => dispatch(changeAuth(auth)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);