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
			winner: null,
			startingPlayer: null,
			activePlayer: null,
			activePlayer1: null,
			activePlayer2: null,
			activePlayerAction: null,
			playerId1: null,
			playerId2: null,
			playerId2Action: null,
			playerId1Action: null,
			playerTurns: [[874, 127], [872, 127], [128, 871]],
			player1Score: 0,
			player2Score: 0,
			teamTwoPlayers: [45, 50, 60],
			x: [],
			y: [],
			player222: [],
			move1: null,
			move2: null,
			score1: 0,
			score2: 0,
			btnTeamOneAtt: "",
			btnTeamOneDef: "",
			pl1Players: [
				{
					id: 3,
					name: "Real Madrid",
					players: [
						{
							id: 1,
							name: "Eden Hazard",
							position: "attacker",
							image: "http://tny.im/jwQ",
							attack: 49,
							defense: 25,
							player_id: "2296",
							season: "2019-2020",
							goals_total: "6",
							passes_total: "150",
							tackles_total: "6",
							shots_total: "15",
							goals_conceded: "2"
						},
						{
							id: 2,
							name: "Casemiro ",
							position: "Midfielder",
							image: "http://eastbridge-sb.com/wp-content/uploads/2018/10/Casemiro-500x500.jpg",
							attack: 20,
							defense: 48,
							player_id: "747",
							season: "2019-2020",
							goals_total: "1",
							passes_total: "170",
							tackles_total: "4",
							shots_total: "5",
							goals_conceded: "2"
						},
						{
							id: 3,
							name: "Sergio Ramos",
							position: "Defender",
							image: "http://tny.im/jwS",
							attack: 35,
							defense: 50,
							player_id: "738",
							season: "2019-2020",
							goals_total: "0",
							passes_total: "130",
							tackles_total: "6",
							shots_total: "0",
							goals_conceded: "2"
						}
					]
				}
			],
			cpuPlayers: [
				{
					id: 2,
					name: "Juventus",
					players: [
						{
							id: 4,
							name: "Cristiano Ronaldo",
							position: "Attacker",
							image:
								"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
							attack: 50,
							defense: 24,
							player_id: "874",
							season: "2019-2020",
							goals_total: "6",
							passes_total: "150",
							tackles_total: "6",
							shots_total: "15",
							goals_conceded: "2"
						},
						{
							id: 2,
							name: "Miralem Pjanic",
							position: "Midfielder",
							image:
								"http://images.performgroup.com/di/library/goal_it/2c/1c/pjanic-juventus-serie-a_ir7c9c6dm2oc1e5xzux4i403y.jpg?t=352894815&w=620&h=430",
							attack: 40,
							defense: 40,
							player_id: "872",
							season: "2019-2020",
							goals_total: "1",
							passes_total: "170",
							tackles_total: "4",
							shots_total: "5",
							goals_conceded: "2"
						},
						{
							id: 3,
							name: "Leonardo Bonucci",
							position: "Defender",
							image: "https://www.soccerpro.com/wp-content/uploads/2018/02/cban_Bonucci.jpg",
							attack: 30,
							defense: 45,
							player_id: "128",
							season: "2019-2020",
							goals_total: "0",
							passes_total: "130",
							tackles_total: "6",
							shots_total: "0",
							goals_conceded: "2"
						}
					]
				}
			]
			// move3 : null,
			// move4 : null,
			// move5 : null,
			// move6 : null,
		};
	}
	scoreAGoal = () => {
		this.forceUpdate();
		if (this.state.move1 === null) {
			console.log("move1", false, this.state.move1);
		} else {
			console.log("move1@@", false, this.state.move1);
		}
	};
	// scoreAGoal = () => {
	//  this.forceUpdate();
	//  if (this.state.move1 !== null && this.state.move2 !== null) {
	//      if (this.state.move1 > this.state.move2) {
	//          this.setState({ score1: this.state.score1 + 1 });
	//          console.log("move1", true);
	//      } else {
	//          this.setState({ score2: this.state.score2 + 1 });
	//          console.log("move1", false);
	//      }
	//  }
	// };
	render() {
		let score1 = 0;
		let score2 = 0;
		// let btnTeamOneAtt = "";
		// let btnTeamOneDef = "";
		// let btnTeamTwoAtt = "";
		// let btnTeamTwoDef = "";
		// let test;
		let winner = () => {
			this.setState({ winner: "ciao" });
		};
		let shot = () => {
			if (this.state.move1 > this.state.move2) {
				this.setState({
					score1: this.state.score1 + 1,
					activePlayer: 2,
					move1: null,
					move2: null,
					playerId2Action: null,
					playerId1Action: null,
					playerId1: null,
					playerId2: null,
					btnTeamOneAtt: "",
					btnTeamOneDef: ""
				});
			} else {
				this.setState({
					score2: this.state.score2 + 1,
					activePlayer: 1,
					move1: null,
					move2: null,
					playerId2Action: null,

					playerId1Action: null,
					btnTeamOneAtt: "",
					btnTeamOneDef: "",
					playerId1: null,
					playerId2: null
				});
			}
			if (this.state.score1 === 2 || this.state.score2 === 2) {
				console.log("winner");
			}
		};
		let play = (plAct, plId, plSc) => {
			let playerSelectedIndex = this.state.pl1Players[0].players.findIndex(y => {
				return y.player_id == plId;
			});
			let playerSelected = this.state.pl1Players[0].players[playerSelectedIndex];
			console.log("plIDindex:", playerSelectedIndex);
			console.log("plID:", playerSelected);
			if (this.state.playerId2 !== null) {
				this.setState({
					// playerId2: null,
					// playerId2Action: null,
					playerId1: playerSelected,
					playerId1Action: plAct,
					move1: parseInt(plSc),
					activePlayer: "shot"
				});
			} else if (this.state.playerId2 === null) {
				this.setState({
					playerId1: playerSelected,
					playerId1Action: plAct,
					move1: parseInt(plSc),
					activePlayer: 2
				});
			}
		};
		let test = () => {
			let cpuPlayers = [
				{
					id: 2,
					name: "Juventus",
					players: [
						{
							id: 4,
							name: "Cristiano Ronaldo",
							position: "attacker",
							image:
								"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
							attack: 50,
							defense: 24,
							player_id: "874",
							season: "2019-2020",
							goals_total: "6",
							passes_total: "150",
							tackles_total: "6",
							shots_total: "15",
							goals_conceded: "2"
						},
						{
							id: 2,
							name: "Miralem Pjanic",
							position: "Position: midfielder",
							image:
								"http://images.performgroup.com/di/library/goal_it/2c/1c/pjanic-juventus-serie-a_ir7c9c6dm2oc1e5xzux4i403y.jpg?t=352894815&w=620&h=430",
							attack: 40,
							defense: 40,
							player_id: "872",
							season: "2019-2020",
							goals_total: "1",
							passes_total: "170",
							tackles_total: "4",
							shots_total: "5",
							goals_conceded: "2"
						},
						{
							id: 3,
							name: "Leonardo Bonucci",
							position: "Position: defender",
							image: "https://www.soccerpro.com/wp-content/uploads/2018/02/cban_Bonucci.jpg",
							attack: 30,
							defense: 45,
							player_id: "128",
							season: "2019-2020",
							goals_total: "0",
							passes_total: "130",
							tackles_total: "6",
							shots_total: "0",
							goals_conceded: "2"
						}
					]
				}
			];
			let chooseArr = ["attack", "defense"];
			let action = chooseArr[Math.floor(Math.random() * chooseArr.length)];
			// console.log("ciao");
			if (this.state.playerId1Action === null) {
				let player = this.state.cpuPlayers[0].players[
					Math.floor(Math.random() * this.state.cpuPlayers[0].players.length)
				];
				console.log("###", player);
				if (action === "attack") {
					console.log("player", player);
					this.setState({
						playerId2: player,
						// playerId2Action: "attack",
						playerId2Action: action,
						activePlayer: 1,
						btnTeamOneAtt: "disabled",
						move2: player.attack
						// x: this.state.x.concat([player])
					});
				} else if (action === "defense") {
					this.setState({
						playerId2: player,
						// playerId2Action: "attack",
						playerId2Action: action,
						activePlayer: 1,
						btnTeamOneDef: "disabled",
						move2: player.defense
					});
				}
			} else if (this.state.playerId1Action === "attack") {
				let player = this.state.cpuPlayers[0].players[
					Math.floor(Math.random() * this.state.cpuPlayers[0].players.length)
				];
				this.setState({
					playerId2: player,
					activePlayer: "shot",
					playerId2Action: "defense",
					move2: player.defense
				});
			} else if (this.state.playerId1Action === "defense") {
				let player = this.state.cpuPlayers[0].players[
					Math.floor(Math.random() * this.state.cpuPlayers[0].players.length)
				];
				this.setState({
					playerId2: player,
					activePlayer: "shot",
					playerId2Action: "attack",
					move2: player.attack
				});
			}
		};
		const computerMove = () => {
			if (this.state.activePlayer === 2) {
				if (this.state.actionPlayer1 !== null) {
					if (this.state.actionPlayer1 === "attack") {
						<Context.Consumer>
							{({ store, actions }) => {
								this.setState({ move1: "ciao" });
								return <></>;
							}}
						</Context.Consumer>;
					} else {
						<Context.Consumer>
							{({ store, actions }) => {
								this.setState({ move1: "ciao" });
								return <></>;
							}}
						</Context.Consumer>;
					}
				} else {
					console.log("ciao");
				}
			}
		};
		const startButton = () => {
			this.setState({ activePlayer: Math.floor(Math.random() * 2) + 1 });
		};
		const move = () => {};
		const endTurn = () => {
			if (this.state.activePlayer === 1) {
				this.setState({ activePlayer: 2 });
			} else if (this.state.activePlayer === 2) {
				this.setState({ activePlayer: 1 });
			}
		};
		const updateScore = (pupu, pipi) => {
			if (this.state.playerTurns.length === 1) {
				if (this.state.playerTurns[0][0] > this.state.playerTurns[0][1])
					this.setState({ player1Score: this.state.player1Score + 1 });
				console.log(this.state.playerTurns[0]);
			} else {
				this.setState({ player2Score: this.state.player2Score + 1 });
			}
			if (this.state.playerTurns.length === 2) {
				if (this.state.playerTurns[1][0] > this.state.playerTurns[1][1])
					this.setState({ player1Score: this.state.player1Score + 1 });
				console.log(this.state.playerTurns[1]);
			} else {
				this.setState({ player2Score: this.state.player2Score + 1 });
			}
			if (this.state.playerTurns.length === 3) {
				if (this.state.playerTurns[2][0] > this.state.playerTurns[2][1])
					this.setState({ player1Score: this.state.player1Score + 1 });
				console.log(this.state.playerTurns[2]);
				console.log("score:" + this.state.player1Score);
			} else {
				this.setState({ player2Score: this.state.player2Score + 1 });
				console.log("score:" + this.state.player2Score);
			}
		};
		const playX = (playerID, playerAction, activePlayer) => {
			console.log("y", this.state.y.length);
			if (this.state.y.length === 0) {
				this.setState({
					y: this.state.y.concat(playerID)
				});
			}
		};
		if (this.state.activePlayer === 2) {
			setTimeout(function() {
				test();
			}, 5000);
		}
		if (this.state.move1 !== null && this.state.move2 !== null) {
			console.log("jgkg");
			score1 += 1;
			console.log("move1", score1);
			if (this.state.move1 > this.state.move2) {
				console.log("move1", score1);
			}
		}
		// if (this.state.score2 === 2) {
		//  winner();
		//  console.log("finally");
		// }
		return (
			<React.Fragment>
				<div className="row generalRow"></div>
				{/* <div className="row firstRow">
					<div className="col-4 float-left">logo</div>
					<div className="col-4 float-right justify-content-center">KICK OFF!!!</div>
					<div className="col-4 float-right">logo</div>
				</div> */}
				{/* HERE IS THE ROW WITH THE TEAM 1 CARDS */}
				<div className="row secondRow">
					<div className="col-6">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									let indexTeamOne = store.teams.findIndex(x => {
										return x.id == store.teamOne;
									});
									// console.log("index", indexTeamOne);
									return store.teams[indexTeamOne].players.map((item, index) => {
										return (
											<div key={index} className="col-4">
												<div className="card cardTeam text-center text-light">
													<div className="card-header">{item.name}</div>
													<div className="text-center">
														<img
															src={item.image}
															alt="Smiley face"
															height="100"
															width="100"
														/>
													</div>
													<div className="card-body">
														<div>{"Position:" + item.position}</div>
														<div>{"Attack:" + item.attack}</div>
														<div>{"Defense:" + item.defense}</div>
													</div>
													<div className="card-footer bubu">
														<button
															type="button"
															className={
																"btn btn-danger btn-sm mr-2 " + this.state.btnTeamOneAtt
															}
															onClick={() => {
																this.setState({});
																play("attack", item.player_id, item.attack);
															}}>
															ATTK
														</button>
														<button
															type="button"
															className={
																"btn btn-primary btn-sm " + this.state.btnTeamOneDef
															}
															onClick={() => {
																this.setState({});
																play("defense", item.player_id, item.defense);
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
					<div className="col-6">
						<div className="row">
							<h1>Play Your Game</h1>
						</div>
						<div className="row">{this.state.score1 === 2 && <h3>You are the winner!</h3>}</div>
						<div className="row">{this.state.score2 === 2 && <h3>Computer wins!</h3>}</div>
						{/* {this.state.score1 < 2 || this.state.score2 < 2 ? (
                            this.state.activePlayer === null ? (
                                <div className="row text-light text-center">
                                    <h3>Press the Play button to start!</h3>
                                </div>
                            ) : this.state.activePlayer === 2 ? (
                                <div className="row text-light text-center">
                                    <h3>Computer is thinking!</h3>
                                </div>
                            ) : (
                                <div className="row text-light text-center">
                                    <h3>Player 1 is your turn! Choose a card!!</h3>
                                </div>
                            )
                        ) : (
                            <div className="row text-light text-center">
                                <h3>winner</h3>
                            </div>
                        )} */}
						<div className="row">
							<div className="col-3">
								{this.state.playerId2 && (
									<div className="card  text-center text-light playedCard">
										<div className="card-header p-1">{this.state.playerId2.name}</div>
										<div className="text-center">
											<img
												src={this.state.playerId2.image}
												alt="Smiley face"
												height="100"
												width="100"
											/>
										</div>
										<div className="card-body p-1">
											<div>{this.state.playerId2.position}</div>
											<div>{"Attack:" + this.state.playerId2.attack}</div>
											<div>{"Defense:" + this.state.playerId2.defense}</div>
										</div>
										<div className="card-footer p-1">
											{this.state.playerId2Action === "attack" ? (
												<div className="alert alert-success text-center mb-0 p-0" role="alert">
													{this.state.playerId2Action}
												</div>
											) : (
												<div className="alert alert-danger text-center mb-0 p-0" role="alert">
													{this.state.playerId2Action}
												</div>
											)}
										</div>
									</div>
								)}
							</div>
							<div className="col-2">
								{this.state.activePlayer === "shot" && (
									<button
										type="button"
										className={"btn btn-info btn-md"}
										onClick={() => {
											shot();
										}}>
										SHOT!
									</button>
								)}
							</div>
							<div className="col-4">
								{this.state.playerId1 && (
									<div className="card  text-center text-light playedCard">
										<div className="card-header p-1">{this.state.playerId1.name}</div>
										<div className="text-center">
											<img
												src={this.state.playerId1.image}
												alt="Smiley face"
												height="100"
												width="100"
											/>
										</div>
										<div className="card-body p-1">
											<div>{this.state.playerId1.position}</div>
											<div>{"Attack:" + this.state.playerId1.attack}</div>
											<div>{"Defense:" + this.state.playerId1.defense}</div>
										</div>
										<div className="card-footer p-1">
											{this.state.playerId1Action === "attack" ? (
												<div className="alert alert-success text-center mb-0 p-0" role="alert">
													{this.state.playerId1Action}
												</div>
											) : (
												<div className="alert alert-danger text-center mb-0 p-0" role="alert">
													{this.state.playerId1Action}
												</div>
											)}
										</div>
									</div>
								)}
							</div>
						</div>
						{/* <div className="row">ff</div> */}
					</div>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="row pb-4 thirdRow">
								<div className="col-4 ">
									{this.state.activePlayer !== null && (
										<h3>{" Player " + this.state.activePlayer} </h3>
									)}
									{this.state.activePlayer === null ? (
										<button
											type="button"
											className={"btn btn-success"}
											onClick={() => {
												startButton();
											}}>
											PLAY
										</button>
									) : (
										<Link to="/PickTeam">
											<button
												type="button"
												className={"btn btn-danger"}
												onClick={() => {
													actions.restartButton();
												}}>
												RESTART
											</button>
										</Link>
									)}
								</div>
								<div className="col-4">
									<div className="row text-light">
										<div className="col-6 score text-right">{this.state.score1}</div>
										<div className="col-6 score text-left">{this.state.score2}</div>
									</div>
								</div>
								<div className="col-4" />
							</div>
						);
					}}
				</Context.Consumer>
				{/* HERE IS THE ROW WITH THE TEAM 2 CARDS */}
				<div className="row secondRow">
					<div className="col-6  ml-auto">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									let indexTeamTwo = store.teams.findIndex(y => {
										return y.id == store.teamTwo;
									});
									// console.log("index", indexTeamTwo);
									return store.teams[indexTeamTwo].players.map((item, index) => {
										// console.log("###", item.player_id);
										return (
											<div key={index} className="col-4">
												<div className="card cardTeam text-center text-light">
													<div>{item.teamLogo}</div>
													<div className="card-header ">{item.name}</div>
													<div className="text-center">
														<img
															src={item.image}
															alt="Smiley face"
															height="100"
															width="100"
														/>
													</div>
													<div className="card-body">
														<div>{"Position:" + item.position}</div>
														<div>{"Attack:" + item.attack}</div>
														<div>{"Defense:" + item.defense}</div>
													</div>
													<div className="card-footer">
														<button
															type="button"
															className={"btn btn-danger btn-sm disabled mr-2"}>
															ATTK
														</button>
														<button
															type="button"
															className={"btn btn-primary btn-sm disabled"}>
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
				<div className="row generalRow"></div>
			</React.Fragment>
		);
	}
}
