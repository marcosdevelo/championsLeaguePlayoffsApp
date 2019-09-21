import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import "../../styles/home.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export class Fight extends React.Component {
	// x="col-4"
	// if this.state.team == true
	//     x='col-4 align-items middle'
	// else
	//     x='col-4'

	render() {
		return (
			<React.Fragment>
				<Modal.Dialog>
					<Modal.Header closeButton>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>Modal body text goes here.</p>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary">Close</Button>
						<Button variant="primary">Save changes</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</React.Fragment>
		);
	}
}
