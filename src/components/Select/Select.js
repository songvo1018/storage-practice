import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'

class Select extends Component {
  onDropDownSelected(e) {
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
			<Form.Control style={{width: '180px'}} as="select" placeholder='Category' custom onChange={(event) => this.onDropDownSelected(event.target.value)}>
				{this.createSelectItems()}
			</Form.Control>
		);
  }
}

export default Select
