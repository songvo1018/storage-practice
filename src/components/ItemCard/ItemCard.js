import React from 'react'
import './ItemCard.css'
import Remove from './removeItem/removeItem'

const ItemCard = (props) => {
  return (
		<div className="list-group-item item">
			<p>{props.data.name}</p>
			<p>{props.data.category}</p>
			<p>{props.data.description}</p>
			<p>
				<strong>{props.data.price}</strong>
			</p>
			<Remove id={props.data.id}/>
			<button>Edit</button>
		</div>
	);
}


export default  ItemCard