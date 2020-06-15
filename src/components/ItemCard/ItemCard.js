import React from 'react'

import Remove from './ItemCardButtons/removeItem'
import Edit from './ItemCardButtons/editItem'

import './ItemCard.css'

const ItemCard = (props) => {
  return (
		<div
			className="list-group-item item"
		>
			<div className="title">
				<span>{props.data.Name}</span>
				<p>{props.data.Category}</p>
			</div>

			<div className="description">{props.data.Description}</div>
			<div className="cost">
				<strong>Cost: {props.data.Cost} </strong>
			</div>
			<div className="btns">
				<Edit className="edit-btn" data={props.data} />
				<Remove className="remove-btn" id={props.data.id} />
			</div>
		</div>
	);
}


export default  ItemCard