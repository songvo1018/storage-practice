import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'

class Select extends Component {
  onDropDownSelected(e) {
    console.log(e);
    this.props.handlerSelect(e);
  }

  createSelectItems () {
		let items = [];
		for (let i = 0; i < this.props.options.length; i++) {
			items.push(
				<option key={i} value={this.props.options[i]}>
					{this.props.options[i]}
				</option>
			);
    }
    return items
  }
  
  render() {
    return (
			<Form.Control as="select" placeholder='Category' custom onChange={(event) => this.onDropDownSelected(event.target.value)}>
				{this.createSelectItems()}
			</Form.Control>
		);
  }
}


export default Select
// const Select = (props) => {
//   let render = () => {
//     let optionsArray = [...props.options];

// 		let renderOptions = (text) => {
// 			return <option>{text}</option>;
// 		};

// 		for (let i = 0; i < optionsArray.length; i++) {
// 			const element = optionsArray[i];
//       renderOptions(element);
//     }
    
//     return renderOptions
//   }
  
//   return (
// 		<Form.Control as="select" custom>
// 			<option>1</option>
// 			<option>2</option>
// 			<option>3</option>
// 			<option>4</option>
//       {render}
// 			<option>5</option>
// 		</Form.Control>
// 	);
// }

// export default Select