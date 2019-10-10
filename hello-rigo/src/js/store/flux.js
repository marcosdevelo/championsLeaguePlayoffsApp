const getState = ({ getStore, setStore }) => {
	//, getActions
	return {
		store: {
			activePlayer: true,
			playerOne: null,
			playerTwo: null,
			currentTeamOne: null,
			currentTeamTwo: null,
			teamOne: null,
			teamTwo: null,
			token: null,
			users: [],
			players: [],
			teams: [
				{
					id: 1,
					name: "Juventus",
					players: [
						{
							id: 1,
							name: "Cristiano Ronaldo",
							position: "attacker",
							image:
								"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
							attack: "Attack 50",
							defense: "Defense 30",
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
							image: "https://m.media-amazon.com/images/I/81IG6OK-2yL._SS500_.jpg ",
							attack: "attack: 40",
							defense: "Defense: 40",
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
							attack: "Attack: 30",
							defense: "Defense: 45",
							player_id: "128",
							season: "2019-2020",
							goals_total: "0",
							passes_total: "130",
							tackles_total: "6",
							shots_total: "0",
							goals_conceded: "2"
						}
					]
				},
				{
					id: 2,
					name: "Real Madrid",
					players: [
						{
							id: 1,
							name: "Eden Hazard",
							position: "attacker",
							image:
								"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
							attack: "Attack 50",
							defense: "Defense 30",
							player_id: "873",
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
							position: "Position: midfielder",
							image: "https://m.media-amazon.com/images/I/81IG6OK-2yL._SS500_.jpg ",
							attack: "attack: 40",
							defense: "Defense: 40",
							player_id: "871",
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
							position: "Position: defender",
							image: "https://www.soccerpro.com/wp-content/uploads/2018/02/cban_Bonucci.jpg",
							attack: "Attack: 30",
							defense: "Defense: 45",
							player_id: "127",
							season: "2019-2020",
							goals_total: "0",
							passes_total: "130",
							tackles_total: "6",
							shots_total: "0",
							goals_conceded: "2"
						}
					]
				},

				{
					id: 3,
					name: "Barcelona",
					players: [
						{
							id: 1,
							name: "Cristiano Ronaldo",
							position: "attacker",
							image:
								"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
							attack: "Attack 50",
							defense: "Defense 30",
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
							image: "https://m.media-amazon.com/images/I/81IG6OK-2yL._SS500_.jpg ",
							attack: "attack: 40",
							defense: "Defense: 40",
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
							attack: "Attack: 30",
							defense: "Defense: 45",
							player_id: "128",
							season: "2019-2020",
							goals_total: "0",
							passes_total: "130",
							tackles_total: "6",
							shots_total: "0",
							goals_conceded: "2"
						}
					]
				},

				{
					id: 4,
					name: "Manchester City",
					players: [
						{
							id: 1,
							name: "Cristiano Ronaldo",
							position: "attacker",
							image:
								"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
							attack: "Attack 50",
							defense: "Defense 30",
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
							image: "https://m.media-amazon.com/images/I/81IG6OK-2yL._SS500_.jpg ",
							attack: "attack: 40",
							defense: "Defense: 40",
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
							attack: "Attack: 30",
							defense: "Defense: 45",
							player_id: "128",
							season: "2019-2020",
							goals_total: "0",
							passes_total: "130",
							tackles_total: "6",
							shots_total: "0",
							goals_conceded: "2"
						}
					]
				},

				{
					id: 5,
					name: "Liverpool",
					players: [
						{
							id: 1,
							name: "Cristiano Ronaldo",
							position: "attacker",
							image:
								"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
							attack: "Attack 50",
							defense: "Defense 30",
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
							image: "https://m.media-amazon.com/images/I/81IG6OK-2yL._SS500_.jpg ",
							attack: "attack: 40",
							defense: "Defense: 40",
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
							attack: "Attack: 30",
							defense: "Defense: 45",
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
			],
			player: [
				{
					id: 1,
					name: "Cristiano Ronaldo",
					position: "attacker",
					image:
						"https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702",
					attack: "Attack 50",
					defense: "Defense 30",
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
					image: "https://m.media-amazon.com/images/I/81IG6OK-2yL._SS500_.jpg ",
					attack: "attack: 40",
					defense: "Defense: 40",
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
					attack: "Attack: 30",
					defense: "Defense: 45",
					player_id: "128",
					season: "2019-2020",
					goals_total: "0",
					passes_total: "130",
					tackles_total: "6",
					shots_total: "0",
					goals_conceded: "2"
				}

				//  {
				// 	id: 4,
				// 	position: "attacker",
				// 	image:
				// 		"https://ssio.azurewebsites.net/x500,q75,jpeg/http://supersport-img.azureedge.net/2019/8/Eden-Hazard-inaction-190811G1050.jpg",
				// 	attack: "47",
				// 	defense: "30",
				// 	player_id: "2296",
				// 	season: "2019-2020",
				// 	goals_total: "5",
				// 	passes_total: "120",
				// 	tackles_total: "4",
				// 	shots_total: "6",
				// 	goals_conceded: "1"
				// },

				// {
				// 	id: 5,
				// 	position: "midfielder",
				// 	image: "http://eastbridge-sb.com/wp-content/uploads/2018/10/Casemiro-500x500.jpg",
				// 	attack: "40",
				// 	defense: "48",
				// 	player_id: "747",
				// 	season: "2019-2020",
				// 	goals_total: "1",
				// 	passes_total: "155",
				// 	tackles_total: "8",
				// 	shots_total: "3",
				// 	goals_conceded: "1"
				// },

				// {
				// 	id: 6,
				// 	position: "defeder",
				// 	image:
				// 		"https://www.realmadrid.com/en/special-features/shirts-and-kits/assets/images/content/milestones/2013/hitodeportivo13.jpg",
				// 	attack: "38",
				// 	defense: "50",
				// 	player_id: "747",
				// 	season: "2019-2020",
				// 	goals_total: "0",
				// 	passes_total: "145",
				// 	tackles_total: "9",
				// 	shots_total: "1",
				// 	goals_conceded: "1"
				// }
			]
		},

		actions: {
			restartButton() {
				setStore({ teamTwo: null, teamOne: null });
			},
			logout: () => {
				let store = getStore();
				setStore({ token: null });
			},
			playACard(playerID, action) {
				console.log("playerID:", playerID);
				console.log("player_action:", action);
			},

			pickATeam(teamID) {
				let store = getStore();

				console.log("Team ID:", teamID);
				if (store.teamOne != null) {
					let currentTeamTwo = store.teams.find(x => {
						return x.id == teamID;
					});
					console.log("currentTeamTwo: ", currentTeamTwo);

					setStore({ teamTwo: teamID });
				} else {
					let currentTeamOne = store.teams.find(y => {
						return y.id == teamID;
					});
					console.log("currentTeamOne: ", currentTeamOne);

					setStore({ teamOne: teamID });
				}
			},
			login(user, history) {
				fetch("https://soccer-final-project-api.herokuapp.com/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) setStore({ invalid: true });
						//console.log(response.json());
						else return response.json();
					})
					.then(token => {
						console.log(token);

						setStore({ token: token.jwt, currentUser: token.id });
						history.push("/PickTeam");
					})
					.catch(err => console.log(err));
			},
			checklogin(token, history) {
				fetch("https://soccer-final-project-api.herokuapp.com/login", {
					method: "GET",
					body: JSON.stringify(token),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(token => {
						console.log(token);
					})
					.then(response => {
						let store = getStore();
						if ({ token: null }) setStore({ token: null });
						//console.log(response.json());
						else return token;
					})
					// .then(token => {
					// 	console.log(token);

					// 	getStore({ token: token.jwt, currentUser: token.id });
					// })
					.catch(err => console.log(err));
			},

			signup(user, history) {
				console.log("vacio", user);
				fetch("https://soccer-final-project-api.herokuapp.com/user", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.ok); // will be true if the response is successfull
						console.log(resp.status); // the status code = 200 or code = 400 etc.
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						const store = getStore();

						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						setStore({
							users: store.users.concat(data)
						});
						history.push("/login");
					})
					.catch(error => {
						//error handling
						console.log("empty signup save", error);
						alert(error);
					});
			},
			getAllUsers() {
				fetch("https://soccer-final-project-api.herokuapp.com/user", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log("Icoming users: ", data);
						setStore({ users: data });
					});
			},
			getAllTeams() {
				fetch("https://soccer-final-project-api.herokuapp.com/teams", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log("Incoming teams: ", data);
						setStore({ teams: data });
					});
			},
			getAllPlayers() {
				fetch("https://soccer-final-project-api.herokuapp.com/player", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log("Incoming players: ", data);
						setStore({ players: data });
					});
			},
			fightToPlayers(p1, p2) {}

			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;
