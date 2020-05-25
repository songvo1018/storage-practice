import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalLogOut(props) {
	const [smShow, setSmShow] = React.useState(false);
	return (
		<>
			<button
				onClick={() => setSmShow(true)}
				style={{
					backgroundColor: "rgb(233, 220, 205)",
				}}
			>
				{props.text}
			</button>{" "}
			<Modal
				size="sm"
				show={smShow}
				onHide={() => setSmShow(false)}
				aria-labelledby="example-modal-sizes-title-sm"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-sm">
						Please, log in
					</Modal.Title>
				</Modal.Header>
			</Modal>
		</>
	);
}

export default ModalLogOut