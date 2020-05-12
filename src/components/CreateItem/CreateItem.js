import React, {Component} from 'react'
import Input from '../Input/Input'
import './CreateItem.css'
import { connect } from 'react-redux'
import { createItem } from "../../store/actions/items";

import Select from '../Select/Select'

class CreateItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: "",
			Name: "",
			Category: "",
			Description: "",
			Cost: "",
			options: ['', 'tea', 'coffe', 'hush', 'M&M`s']
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
	}

	handlerValue(e) {
		const value = e.value;
		const name = e.placeholder;
		
		let nexId = () => {
			return this.props.array.length + 1;
		}
		
		this.setState({
			[name]: value,
			id: nexId(),
		});

	}

	handlerSelect(value) {
		console.log('on', value);
		
		this.setState({
			Category: value
		})
	}

	render() {
		let inputsName = [ 'Name', 'Description', 'Cost']
		let inputFields = []
		for (let i = 0; i < inputsName.length; i++) {
			inputFields.push(
				<li key={inputsName.length+inputsName[i]}>
					<Input
						placeholder={inputsName[i]}
						key={inputsName[i]}
						name={inputsName[i]}
						type="text"
						onChange={(event) => this.handlerValue(event.target)}
					/>
				</li>
			);
		}
		

		return (
			<ul>
				{inputFields}
				<Select
					options={this.state.options}
					handlerSelect={this.handlerSelect}
				/>
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
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createItemAction: (array) => dispatch(createItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
