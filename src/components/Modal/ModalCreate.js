import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css"

import CreateItem from '../CreateItem/CreateItem'


const ModalCreate = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const showModal = () => {
		setIsOpen(true);
	};

	const hideModal = () => {
		setIsOpen(false);
	};
	return (
		<>
			<button 
			onClick={() => showModal()}
			style={{
				backgroundColor: 'rgb(233, 220, 205)'
			}}
			>Create Item</button>
			<Modal show={isOpen} onHide={hideModal}>
				<Modal.Header>Create new item</Modal.Header>
				<Modal.Body>
					<CreateItem hideModal={hideModal}/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ModalCreate;