import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pickteam.scss";

export class juventusGame extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="tarjetas">
					<img
						className="d-block"
						src="https://vignette.wikia.nocookie.net/logopedia/images/5/50/600px-Juventusstemma.png/revision/latest?cb=20120107135132"
						alt="First slide"
						width="225"
						height="228"
					/>

					<Context.Consumer>
						{({ store, actions }) => {
							return store.player.map((item, index) => {
								return (
									<div key={index} className="card text-center">
										<div className="card-header">{item.name}</div>
										<div className="card-body">
											<img src={item.image} alt="Smiley face" height="42" width="42" />
											{item.position}
											{item.attack}
											{item.defense}
										</div>
										<div className="card-footer">{item.season}</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</React.Fragment>
		);
	}
}
