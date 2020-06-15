import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalEnterFields(props) {
	const [smShow, setSmShow] = React.useState(false);
	return (
		<>
			<Modal
				size="sm"
				show={smShow}
				onHide={() => setSmShow(false)}
				aria-labelledby="example-modal-sizes-title-sm"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-sm">
						{props.text}
					</Modal.Title>
				</Modal.Header>
			</Modal>
		</>
	);
}

export default ModalEnterFields;
