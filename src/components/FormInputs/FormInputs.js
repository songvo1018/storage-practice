import React, { Component } from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'

export default class FormInputs extends Component {
  constructor() {
    super()
    this.handlerSelect = this.handlerSelect.bind(this)
  }

  handlerSelect (value) {
		this.setState({
      Category: value
    })
  };
  
  handlerValue (e) {
		const value = e.value;
		const name = e.placeholder;

    this.setState({
      [name]: value,
      id: this.props.data.id
		});
	}

	InputFields () {
		let inputsName = this.props.inputsName;
		let inputFields = [];
		for (let i = 0; i < inputsName.length; i++) {
					inputFields.push(
				<li key={inputsName.length + inputsName[i]}>
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
		return inputFields	
	}	
  render() {
    
    
    return (
			<div>
				{this.InputFields()}
				<Select options={this.props.category} handlerSelect={this.handlerSelect} />
        <button type="submit" onClick={() => {this.props.updateItem(this.state);}}>Edit</button>
        <button  onClick={this.props.hideModal}>Cancel</button>
			</div>
		);
  }
}
