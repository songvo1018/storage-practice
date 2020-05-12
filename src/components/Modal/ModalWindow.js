import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css"

const ModalWindow = (props) => {
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
				<Modal.Header>Hi</Modal.Header>
				<Modal.Body>asdfasdf</Modal.Body>
				<Modal.Footer>
					This is the footer
					<button onClick={hideModal}>Cancel</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalWindow