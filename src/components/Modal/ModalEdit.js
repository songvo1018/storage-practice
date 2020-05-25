import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css"

import FormInputs from '../FormInputs/FormInputs'


const ModalEdit = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	
	const showModal = () => {
    setIsOpen(true);
	};
	const hideModal = () => {
		setIsOpen(false);
	};
	console.log(props.data);
	
	return (
		<>
			<button 
				onClick={() => showModal()}
				style={{backgroundColor: '#e9dccd', borderRadius: '4px'}}
			>
				Edit item
			</button>
			<Modal show={isOpen} onHide={hideModal}>
				<Modal.Header>Edit item '{props.data.Name}'</Modal.Header>
				<Modal.Body>
					<ul>
						<FormInputs
							updateItem={props.updateItem}
							data={props.data}
							inputsName={props.inputsName}
							category={props.category}
							hideModal={hideModal}
						/>
					</ul>
				</Modal.Body>
			</Modal>
		</>
	);
}


export default ModalEdit