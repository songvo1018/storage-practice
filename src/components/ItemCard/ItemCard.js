import React from 'react'
import './ItemCard.css'

const ItemCard = (props) => {
  return (
		<div className='card'>
			<p>{props.data.name}</p>
			<p>{props.data.category}</p>
			<p>{props.data.description}</p>
		</div>
	);
}


export default  ItemCard