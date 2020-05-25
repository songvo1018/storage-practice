import React, { Component } from 'react'
import {connect} from 'react-redux'

import { removeItem } from "../../../store/actions/items";

class RemoveItem extends Component {

  handlerRemove(e) {
    const result = this.props.array.filter((item) => item.id !== e)
    this.props.removeItemAction(result);
  }

  render() {
    return (
			<div>
				<button
					onClick={() => {
						this.handlerRemove(this.props.id);
					}}
					style={{
						backgroundColor: "#613a43",
						color: "azure",
						borderRadius: "4px",
					}}
				>
					Delete
				</button>
			</div>
		);
  }
}

const mapStateToProps = (store) => {
	return {
		array: store.item.array,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeItemAction: (array) => dispatch(removeItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(RemoveItem);