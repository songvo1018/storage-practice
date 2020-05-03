import React from 'react'

const Input = (props) => {
	let placeholder = props.placeholder
  return (
		<label>
			<input 
				placeholder={placeholder} 
				onChange = {props.onChange}
			/>
		</label>
	);
}

export default Input
