import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pickteam.scss";

export class juventusGame extends React.Component {
	render() {
		return (
			<div className="tarjetas">
				<img
					className="d-block"
					src="https://vignette.wikia.nocookie.net/logopedia/images/5/50/600px-Juventusstemma.png/revision/latest?cb=20120107135132"
					alt="First slide"
					width="225"
					height="228"
				/>
			</div>
		);
	}
}
