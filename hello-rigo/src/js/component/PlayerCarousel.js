import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from "react-bootstrap/Carousel";

export class PlayerCaruosel extends React.Component {
	render() {
		return (
			<div className="container playerContainer">
				<div className="card-deck ">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.players.map((item, index) => {
								return (
									<div key={index} className="card playercardland">
										<img
											src={item.image}
											width="225"
											height="228"
											className="card-img-top1"
											alt="..."
										/>
										<h5 className="card-title">{item.name}</h5>
										<div className="card-body cuerpoBody">
											<div className="card-text">
												<ul>
													<li>Shots Total: {item.shots_total}</li>

													<li> Passes Total: {item.passes_total}</li>

													<li> Goals: {item.goals_total}</li>

													<li> Goals Conceded: {item.goals_conceded}</li>

													<li> Goals Tackles: {item.tackles_total}</li>
												</ul>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
