import React from 'react'
import './ItemCard.css'
import Remove from './removeItem/removeItem'
// import ModalWindow from '../Modal/ModalWindow'

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
			<button>Edit</button>
		</div>
	);
}


export default  ItemCard