import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem } from "../../../store/actions/items";
import ModalEdit from "../../Modal/ModalEdit";

class EditItem extends Component {
	constructor() {
		super()
		this.updateItem = this.updateItem.bind(this)
	}
	updateItem(updatedItem) {
		console.log(updatedItem);
		// фильтрануть массив на предмет айтема совпадающейго с айди обновленного, а так же нужна
		// сортировка, чтобы обновленный айтем занял место старого
		const array = [...this.props.array, updatedItem];
		this.props.editItemAction(array);
	}


	render() {
		
		return (
			<div>
				<ModalEdit
					updateItem={this.updateItem}
					data={this.props.data}
					inputsName={this.props.inputsName}
					category={this.props.category}
				/>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		array: store.item.array,
		category: store.item.category,
		inputsName: store.item.inputsName
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		editItemAction: (array) => dispatch(editItem(array)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
