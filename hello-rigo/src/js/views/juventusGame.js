import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pickteam.scss";

export class JuventusGame extends React.Component {
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
					<div className="wrapper">
						<div className="Row">
							<Context.Consumer>
								{({ store, actions }) => {
									return store.players.map((item, index) => {
										return (
											<div key={index} className="col-2">
												<div className="cardPlayer">
													<div className="card-header">{item.name}</div>
													<img src={item.image} alt="Smiley face" height="75" width="75" />
													<div className="card-body">
														<div>{item.position}</div>
														<div>{item.attack}</div>
														<div>{item.defense}</div>
													</div>
													<div className="card-footer">
														<button type="button" className="btn btn-danger">
															ATTK
														</button>
														<button type="button" className="btn btn-primary">
															DEF
														</button>
													</div>
												</div>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
