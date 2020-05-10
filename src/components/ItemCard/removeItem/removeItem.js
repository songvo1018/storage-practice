import React, { Component } from 'react'
import {connect} from 'react-redux'
import { removeItem } from "../../../store/actions/items";

class RemoveItem extends Component {

  state = {
    id: this.props.id,
    array: this.props.array
  }

  updateStore(arrayNew) {
    // this.setState({
    //   array
    // })
    // let array = this.state.array
    this.props.removeItemAction(arrayNew)
  }

  handlerRemove(e) {
    let array = this.state.array
    array.forEach(element => {
      if (element.id === e) {
        let itemNumber = array.find((currentValue) => currentValue.id === element.id).id;
        
        const index = array.findIndex((n) => n.id === itemNumber);
				if (index !== -1) {
          array.splice(index, 1);
				}
        this.updateStore(array)
      }
    });
  }

  render() {
    return (
			<div>
				<button onClick={() => this.handlerRemove(this.state.id)}>Delete</button>
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
		removeItemAction: (array) => dispatch(removeItem(array)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(RemoveItem);