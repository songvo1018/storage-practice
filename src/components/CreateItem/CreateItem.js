import React from 'react'
import Input from '../Input/Input'
import './CreateItem.css'

const CreateItem = () => {
  return (
		<div className="create-shadow">
			<div className="create-modal">
				<ul>
					<li>
						<Input placeholder="title" />
					</li>
					<li>
						<Input placeholder="name" />
					</li>
					<li>
						<Input placeholder="description" />
					</li>
					<li>
						<Input placeholder="price" />
					</li>
						<button type="submit">Create</button>
						<button>Cancel</button>
				</ul>
			</div>
		</div>
  );
  
}

export default CreateItem
