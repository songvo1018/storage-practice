import React from 'react'

import Remove from './ItemCardButtons/removeItem'
import Edit from './ItemCardButtons/editItem'

import './ItemCard.css'

const ItemCard = (props) => {
  return (
		<div
			className="list-group-item item"
			style={{ backgroundColor: "#a9ff8a" }}
		>
			<div className="title">
				<h3>{props.data.Name}</h3>
				<span>{props.data.Category}</span>
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