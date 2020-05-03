import React, { Component } from 'react'
import ItemCard from '../components/ItemCard/ItemCard'
import './Layout.css'
import Auth from '../components/Auth/Auth'
import CreateItem from '../components/CreateItem/CreateItem'

export default class Layout extends Component {

  state = {
      arr: this.props.arr,
      showCreateItem: false
  }
  
  // mapArray() {
  //   for (let i = 0; i < this.state.arr.length; i++) {
  //     const element = this.state.arr[i];
  //     this.renderItems(element)
  //   }
  // }

  renderItems() {
    return (
      <ul>
				<ItemCard data={this.state.arr[0]} />
				<ItemCard data={this.state.arr[1]} />
				<ItemCard data={this.state.arr[2]} />
				<ItemCard data={this.state.arr[3]} />
				<ItemCard data={this.state.arr[0]} />
				<ItemCard data={this.state.arr[1]} />
      </ul>
		)
  }


  showCreateItem() {
    let show = !!this.state.showCreateItem
    return (
      this.setState({
        showCreateItem: !show
      })
    )
  }
  render() {
    return (
			<div>
				<div className="header">
					<h2>Your items on store</h2>
					<Auth />
					<button
						onClick={() => {
							this.showCreateItem();
						}}
					>
						Create Item
					</button>
				</div>
					{this.state.showCreateItem ? <CreateItem /> : null}

				<div className="list-item">{this.renderItems()}</div>
			</div>
		);
  }
}
