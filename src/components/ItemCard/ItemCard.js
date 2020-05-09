import React from 'react'
import './ItemCard.css'

const ItemCard = (props) => {
  return (
		<div className="list-group-item item">
			<p>{props.data.name}</p>
			<p>{props.data.category}</p>
			<p>{props.data.description}</p>
			<p><strong>{props.data.price}</strong></p>
			<button>Delete</button>
			<button>Edit</button>
		</div>
	);
}


export default  ItemCard