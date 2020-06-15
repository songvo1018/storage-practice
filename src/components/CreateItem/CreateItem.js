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
		if (item.Name && item.Description && item.Cost != '') {
			const array = [...this.props.array, item];
			this.props.createItemAction(array);
			this.props.hideModal();
		}
		else {
			alert('Please, enter fields')
		}
		
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
						options={this.state.options}
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
		categories: store.user,
		inputsName: store.item.inputsName
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createItemAction: (array) => dispatch(createItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
