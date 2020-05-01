import React, { Component } from 'react'
import ItemCard from '../components/ItemCard/ItemCard'

export default class Layout extends Component {

  state = {
      arr: this.props.arr,
      id: '1',
      name: 'alex',
      category: 'creator',
      description: '...',
      price: 'all'
  }
  
  renderItems() {    
    return (
				<li key={this.state.arr[0].id}>
					<ItemCard data={this.state} />
				</li>
			)
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}
