import React, {Component} from 'react'
import Input from '../Input/Input'
import './CreateItem.css'
import { connect } from 'react-redux'
import { createItem } from "../../store/actions/items";

class CreateItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: "",
			name: "",
			category: "",
			description: "",
			price: "",
			array: [...this.props.array],
			prevId: this.props.array
		};
	}
	

	saveItemInArray() {
		let item = {
			id: this.state.id,
			name: this.state.name,
			category: this.state.category,
			description: this.state.description,
			price: this.state.price,
		};

		this.setState({
			array: [...this.state.array, item]
		})

		const array = [...this.state.array, item]
		this.props.createItemAction(array)
	}

	handlerValue(e) {
		const value = e.value;
		const name = e.placeholder;
		let prevId = () => {
			return this.props.array.length;
		}
		
		this.setState({
			[name]: value,
			id: prevId() + 1,
		});

	}

	render() {
		let inputsName = ['title', 'name', 'category', 'description', 'price']
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
			<div className="create-shadow">
				<div className="create-modal">
					<ul>
						{inputFields}

						<button
							type="submit"
							onClick={() => {this.saveItemInArray()}}>
							Create
						</button>
						<button>Cancel</button>
					</ul>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (store) => {
	return {
		user: store.user,
		array: store.item.array,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createItemAction: (array) => dispatch(createItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
