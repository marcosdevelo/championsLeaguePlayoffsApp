import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export class LandingPage extends React.Component {
	render() {
		return (
			<div className="landingPage">
				<Navbar bg="light">
					<Navbar.Brand href="#home">
						<img
							src="https://vignette.wikia.nocookie.net/logopedia/images/4/4d/UEFA_Champions_League_%282012%29.svg/revision/latest/scale-to-width-down/200?cb=20180731114846"
							className="d-inline-block align-top"
							width="30"
							height="30"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
					<DropdownButton id="dropdown-item-button" title="Dropdown button">
						<Dropdown.Item as="button">Action</Dropdown.Item>
						<Dropdown.Item as="button">Another action</Dropdown.Item>
						<Dropdown.Item as="button">Something else</Dropdown.Item>
					</DropdownButton>
				</Navbar>
			</div>
		);
	}
}
