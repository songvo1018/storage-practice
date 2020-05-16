import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "bootstrap/dist/css/bootstrap.min.css"

import Select from '../Select/Select'
import Input from '../Input/Input'

const ModalEdit = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
	console.log('1');
	
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
				Edit item
			</button>
			<Modal show={isOpen} onHide={hideModal}>
				<Modal.Header>Edit item</Modal.Header>
				<Modal.Body>
					<ul>
						<li>
							<Input placeholder={'1'}/>
						</li>
						<li>
							<Input placeholder={'2'}/>
						</li>
						<li>
							<Input placeholder={'3'}/>
						</li>
						<Select />
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