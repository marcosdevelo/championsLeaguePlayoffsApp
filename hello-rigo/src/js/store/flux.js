const getState = ({ getStore, setStore }) => {
	//, getActions
	return {
		store: {
			teamOne: null,
			teamTwo: null,
			users: [],
			players: [],
			teams: [
				{
					id: 1,
					name: "A.c. Milan",
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
					id: 1,
					name: "Real Madrid",
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
			pickATeam(teamID) {
				let store = getStore();
				console.log("Team ID:", teamID);
				if (store.teamOne != null) {
					setStore({ teamTwo: teamID });
				} else {
					setStore({ teamOne: teamID });
				}
			},
			login(user, history) {
				fetch("https://3000-cddd9ece-0bb6-467e-976a-7594d5aa3c87.ws-us1.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) throw Error();
						//console.log(response.json());
						return response.json();
					})
					.then(token => {
						console.log(token);
						setStore({ token: token.jwt, currentUser: token.id });
						props.history.push("/PickTeam");
					})
					.catch(err => console.log(err));
			},
			signup(user, history) {
				console.log("vacio", user);
				fetch("https://3000-cddd9ece-0bb6-467e-976a-7594d5aa3c87.ws-us1.gitpod.io/user", {
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
						history.push("/home");
					})
					.catch(error => {
						//error handling
						console.log("hubo un error en fetch save", error);
						alert(error);
					});
			},
			getAllUsers() {
				fetch("https://3000-cddd9ece-0bb6-467e-976a-7594d5aa3c87.ws-us1.gitpod.io/user", {
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
			getAllPlayers() {
				fetch("https://3000-cddd9ece-0bb6-467e-976a-7594d5aa3c87.ws-us1.gitpod.io/player", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log("Icoming users: ", data);
						setStore({ players: data });
					});
			},
			fightToPlayers(p1, p2) {}

			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;
