import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css"

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
				onClick={() => showModal() }
			>
				Create Item
			</button>
			<Modal show={isOpen} onHide={hideModal}>
				<Modal.Header>Edit item</Modal.Header>
				<Modal.Body>
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