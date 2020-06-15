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
	return (
		<>
			<button
				onClick={() => showModal()}
				style={{
					backgroundColor: "white",
					borderRadius: "2px",
					border: "1px solid gray",
				}}
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
					{/* форма, в поля которой выведены актуальные значения конкретного итема. при нажатии на саб, форма должна закрыться и заменить старые значения в итеме(сторе) на новое с сохранением айди */}
				</Modal.Body>
				<Modal.Footer>
					<button onClick={hideModal}>Cancel</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}


export default ModalEdit