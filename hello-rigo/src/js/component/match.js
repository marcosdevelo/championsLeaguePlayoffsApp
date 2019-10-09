import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Fight } from "../component/fight.js";
import "../../styles/home.scss";

export class Match extends React.Component {
	constructor(props) {
		super(props); //this will be passed as the contenxt value
		this.state = {
			activePlayer: 1,
			activePlayerAction: null,
			playerId1: null,
			playerId2: null,
			playerTurns: [[874, 873], [127, 126]],
			player1Score: 0,
			player2Score: 0,
			x: []
		};
	}

	render() {
		// let btnTeamOneAtt = "";
		// let btnTeamOneDef = "";
		// let btnTeamTwoAtt = "";
		// let btnTeamTwoDef = "";
		// let test;

		const endTurn = activePlayer => {
			if (activePlayer === 1) {
				this.setState({ activePlayer: 2 });
			} else if (activePlayer === 2) {
				this.setState({ activePlayer: 1 });
			}
		};

		const updateScore = (pupu, pipi) => {
			if (this.state.playerTurns.length === 1) {
				if (this.state.playerTurns[0][0] > this.state.playerTurns[0][1]) {
					this.setState({ player1Score: this.state.player1Score + 1 });
					console.log(this.state.playerTurns[0]);
				} else {
					this.setState({ player2Score: this.state.player2Score + 1 });
				}
			} else if (this.state.playerTurns.length === 2) {
				if (this.state.playerTurns[1][0] > this.state.playerTurns[1][1]) {
					this.setState({ player1Score: this.state.player1Score + 1 });
					console.log(this.state.playerTurns[1]);
				} else if (this.state.player2Score === 1) {
					this.setState({ player2Score: this.state.player2Score + 1 });
				}
			} else if (this.state.playerTurns.length === 3) {
				if (this.state.playerTurns[2][0] > this.state.playerTurns[2][1]) {
					this.setState({ player1Score: this.state.player1Score + 1 });
					console.log(this.state.playerTurns[2]);
				} else {
					this.setState({ player2Score: this.state.player2Score + 1 });
				}
			}
		};

		const play = (playerID, playerAction, activePlayer) => {
			if (activePlayer === 1) {
				this.setState({
					playerId1: playerID,
					activePlayerAction: playerAction
				});
				console.log("playerID", playerID),
					console.log("playerAction", this.state.activePlayerAction),
					console.log("player", activePlayer);
			} else if (activePlayer === 2) {
				this.setState({
					playerId2: playerID,
					activePlayerAction: playerAction
				});

				{
					{
					}
				}
				console.log("playerID", playerID),
					console.log("playerAction", this.state.activePlayerAction),
					console.log("player", activePlayer);
				endTurn(this.state.activePlayer);
			}
		};

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
													<div className="card-body styles">
														<div>{"Position:" + item.position}</div>
														<div>{"Attack:" + item.attack}</div>
														<div>{"Defense:" + item.defense}</div>
													</div>
													{this.state.activePlayer === 1 ? (
														this.state.player_id !== undefined ? (
															this.state.playerAction === "attack" ? (
																<div className="card-footer bubu">
																	<button
																		type="button"
																		className={"btn btn-danger disabled"}>
																		ATTK
																	</button>
																	<button
																		type="button"
																		className={"btn btn-primary"}
																		onClick={() => {
																			this.setState({
																				activePlayer: 2,
																				x: this.state.x.concat({
																					playerId: item.player_id
																				}),
																				activePlayerAction: "defense"
																			});
																			play(
																				item.player_id,
																				"defense",
																				this.state.activePlayer
																			);
																		}}>
																		DEF
																	</button>
																</div>
															) : (
																<div className="card-footer last">
																	<button
																		type="button"
																		className={"btn btn-danger"}
																		onClick={() => {
																			this.setState({
																				activePlayer: 2,
																				x: this.state.x.concat({
																					playerId: item.player_id
																				}),
																				activePlayerAction: "attack"
																			});
																			play(
																				item.player_id,
																				"attack",
																				this.state.activePlayer
																			);
																		}}>
																		ATTK
																	</button>
																	<button
																		type="button"
																		className={"btn btn-primary disabled"}>
																		DEF
																	</button>
																</div>
															)
														) : (
															<div className="card-footer tutu">
																<button
																	type="button"
																	className={"btn btn-danger"}
																	onClick={() => {
																		this.setState({
																			activePlayer: 2,
																			x: this.state.x.concat({
																				playerId: item.player_id
																			}),
																			activePlayerAction: "attack"
																		});
																		play(
																			item.player_id,
																			"attack",
																			this.state.activePlayer
																		);
																	}}>
																	ATTK
																</button>
																<button
																	type="button"
																	className={"btn btn-primary "}
																	onClick={() => {
																		this.setState({
																			activePlayer: 2,
																			x: this.state.x.concat({
																				playerId: item.player_id
																			}),
																			activePlayerAction: "defense"
																		});
																		play(
																			item.player_id,
																			"defense",
																			this.state.activePlayer
																		);
																	}}>
																	DEF
																</button>
															</div>
														)
													) : (
														this.state.activePlayer === 2
													)}
												</div>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col align-self-center">
							<h2> {"Player 1 = " + this.state.player1Score} </h2>
						</div>
						<div className="col">
							<h4> VS </h4>
						</div>
						<div className="col">
							<h3> {"Player 2 = " + this.state.player1Score} </h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6 opponent ml-auto">
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
														<button
															type="button"
															className={"btn btn-danger "}
															onClick={() => {
																this.setState({
																	activePlayer: 1,
																	x: this.state.x.concat({
																		playerId: item.player_id
																	}),
																	activePlayerAction: "attack"
																});
																play(item.player_id, "attack");
															}}>
															ATTK
														</button>
														<button
															type="button"
															className={"btn btn-primary "}
															onClick={() => {
																this.setState({
																	activePlayer: 1,
																	x: this.state.x.concat({
																		playerId: item.player_id
																	}),
																	activePlayerAction: "defense"
																});
																play(item.player_id, "defense");
															}}>
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
