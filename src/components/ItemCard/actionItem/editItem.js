import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem } from "../../../store/actions/items";
import ModalEdit from "../../Modal/ModalEdit";

class EditItem extends Component {
	handlerRemove(data) {
    console.log(data);
    
	}

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.handlerRemove(this.props.data);
					}}
				>
					Edit
				</button>
				<ModalEdit />
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
		editItemAction: (array) => dispatch(editItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
