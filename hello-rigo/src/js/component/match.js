import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Fight } from "../component/fight.js";
// import "../../styles/home.scss";

export class Match extends React.Component {
	// x="col-4"
	// if this.state.team == true
	//     x='col-4 align-items middle'
	// else
	//     x='col-4'

	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-4 float-left">logo</div>
					<div className="col-4 float-right justify-content-center">KICK OFF!!!</div>
					<div className="col-4 float-right">logo</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									let indexTeamOne = store.teams.findIndex(x => {
										return x.id == store.teamOne;
									});
									console.log("index", indexTeamOne);
									return store.teams[indexTeamOne].players.map((item, index) => {
										return (
											<div key={index} className="col-4">
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

				<div className="row pb-4">
					<div className="col-4 offset-4 position-fixed">Match Players</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									let indexTeamTwo = store.teams.findIndex(y => {
										return y.id == store.teamTwo;
									});
									console.log("index", indexTeamTwo);
									return store.teams[indexTeamTwo].players.map((item, index) => {
										return (
											<div key={index} className="col-4">
												<div className="cardPlayer">
													<div>{item.teamLogo}</div>
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
