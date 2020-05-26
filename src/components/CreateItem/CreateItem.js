import React, {Component} from 'react'
import { connect } from 'react-redux'

import { createItem } from "../../store/actions/items";

import Input from '../Input/Input'
import Select from '../Select/Select'

import './CreateItem.css'

class CreateItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: "",
			Name: "",
			Category: "",
			Description: "",
			Cost: "",
			// options: this.props.category
		};
		this.handlerSelect = this.handlerSelect.bind(this)
	}
	

	saveItemInArray() {
		let item = {
			id: this.state.id,
			Name: this.state.Name,
			Category: this.state.Category,
			Description: this.state.Description,
			Cost: this.state.Cost,
		};

		const array = [...this.props.array, item]
		this.props.createItemAction(array)
		this.props.hideModal();
	}

	nexId = () => {
			return this.props.array.length + 1;
		}

	handlerValue(e) {
		const value = e.value;
		const name = e.placeholder;
				
		this.setState({
			[name]: value,
			id: this.nexId(),
		});

	}

	handlerSelect(value) {
		this.setState({
			Category: value
		})
	}

	render() {
		let inputFields = []
		console.log(this.props.category);
		
		for (let i = 0; i < this.props.inputsName.length; i++) {
			inputFields.push(
				<li key={this.props.inputsName.length+this.props.inputsName[i]}>
					<Input
						placeholder={this.props.inputsName[i]}
						key={this.props.inputsName[i]}
						name={this.props.inputsName[i]}
						type="text"
						onChange={(event) => this.handlerValue(event.target)}
					/>
				</li>
			);
		}		

		return (
			<ul>
				{inputFields}
				<li>
					<Select
						options={this.props.category}
						handlerSelect={this.handlerSelect}
					/>
				</li>
				<button
					type="submit"
					onClick={() => {
						this.saveItemInArray();
					}}
				>
					Create
				</button>
				<button onClick={() => this.props.hideModal()}>Cancel</button>
			</ul>
		);
	}
}


const mapStateToProps = (store) => {
	return {
		array: store.item.array,
		category: store.item.category,
		inputsName: store.item.inputsName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createItemAction: (array) => dispatch(createItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
