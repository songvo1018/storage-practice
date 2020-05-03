import React from 'react'
import './ItemCard.css'

const ItemCard = (props) => {
  let data = props.data
  return (
		<div className='card'>
			<p>array {data.name}</p>
		</div>
	);
}


export default  ItemCard