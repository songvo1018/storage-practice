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
  
  mapArray() {
    for (let i = 0; i < this.state.arr.length; i++) {
      const element = this.state.arr[i];
      this.renderItems(element)
    }
  }

  renderItems() {
    return (
				<li key={this.state.arr[0].id}>
					<ItemCard data={this.state.arr[0]} />
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
