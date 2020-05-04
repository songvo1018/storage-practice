import React from 'react'

const Input = (props) => {
	let placeholder = props.placeholder
  return (
			<input 
				placeholder={placeholder} 
				key = {placeholder}
				onChange = {props.onChange}
			/>
	);
}

export default Input
