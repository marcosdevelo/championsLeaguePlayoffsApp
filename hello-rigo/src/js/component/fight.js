import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import "../../styles/home.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export class Fight extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="card-header">{item.name}</div>
				<img src={item.image} alt="Smiley face" height="75" width="75" />
				<div className="card-body">
					<div>{item.position}</div>
					<div>{item.attack}</div>
					<div>{item.defense}</div>
				</div>
				<div className="card-footer">
					<button type="button" className="btn btn-danger" />
				</div>
			</div>
		);
	}
}
