import React from 'react'
import './ItemCard.css'
import Remove from './actionItem/removeItem'
import Edit from './actionItem/editItem'


const ItemCard = (props) => {
  return (
		<div className="list-group-item item">
			<p>{props.data.Name}</p>
			<p>{props.data.Category}</p>
			<p>{props.data.Description}</p>
			<p>
				<strong>{props.data.Cost}</strong>
			</p>
			<Remove id={props.data.id}/>
			<Edit data={props.data} />
		</div>
	);
}


export default  ItemCard