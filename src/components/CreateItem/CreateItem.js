import React, {Component} from 'react'
import Input from '../Input/Input'
import './CreateItem.css'
import { connect } from 'react-redux'
import { createItem } from "../../store/actions/items";

class CreateItem extends Component {
	state = {
		id: "",
		name: "",
		category: "",
		description: "",
		price: "",
	};

	handlerValue(e) {
		const value = e.value;
		const name = e.name;

		this.setState({
			[name]: value,
		});
		console.log(this.state);
	}

	render() {
		return (
			<div className="create-shadow">
				<div className="create-modal">
					<ul>
						<li>
							<Input
								placeholder="title"
								name="text"
								onChange={(event) => this.handlerValue(event.target)}
							/>
						</li>
						<li>
							<Input
								placeholder="name"
								name="text"
								onChange={(event) => this.handlerValue(event.target)}
							/>
						</li>
						<li>
							<Input
								placeholder="description"
								onChange={(event) => this.handlerValue(event.target)}
							/>
						</li>
						<li>
							<Input
								placeholder="price"
								onChange={(event) => this.handlerValue(event.target)}
							/>
						</li>
						<button type="submit">Create</button>
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
		array: store.item.arr,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createItemAction: (array) => dispatch(createItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
