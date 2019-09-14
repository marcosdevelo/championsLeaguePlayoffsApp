const getState = ({ getStore, setStore }) => {
	//, getActions
	return {
		store: {
			contact: [],

			player: [
				{
					id: 1,
					name: "Lionel Messi",
					position: "attacker",
					image: "https://www.futsalescocia.co.uk/wp-content/uploads/2018/04/CvN7lx1W8AA3vIu.jpg",
					attack: "50",
					defense: "30",
					player_id: "154",
					season: "2019-2020",
					goals_total: "6",
					passes_total: "150",
					tackles_total: "6",
					shots_total: "15",
					goals_conceded: "2"
				},

				{
					id: 2,
					name: "Sergi Roberto",
					position: "midfielder",
					image: "https://headbandsandheartbreak.files.wordpress.com/2013/10/sergi-roberto-2.jpg",
					attack: "40",
					defense: "40",
					player_id: "137",
					season: "2019-2020",
					goals_total: "1",
					passes_total: "170",
					tackles_total: "4",
					shots_total: "5",
					goals_conceded: "2"
				},

				{
					id: 3,
					name: "Jordi Alba",
					position: "defender",
					image: "https://www.thesportsdb.com/images/media/player/thumb/xayer11514552889.jpg",
					attack: "30",
					defense: "45",
					player_id: "128",
					season: "2019-2020",
					goals_total: "0",
					passes_total: "130",
					tackles_total: "6",
					shots_total: "0",
					goals_conceded: "2"
				},

				{
					id: 4,
					position: "attacker",
					image:
						"https://ssio.azurewebsites.net/x500,q75,jpeg/http://supersport-img.azureedge.net/2019/8/Eden-Hazard-inaction-190811G1050.jpg",
					attack: "47",
					defense: "30",
					player_id: "2296",
					season: "2019-2020",
					goals_total: "5",
					passes_total: "120",
					tackles_total: "4",
					shots_total: "6",
					goals_conceded: "1"
				},

				{
					id: 5,
					position: "midfielder",
					image: "http://eastbridge-sb.com/wp-content/uploads/2018/10/Casemiro-500x500.jpg",
					attack: "40",
					defense: "48",
					player_id: "747",
					season: "2019-2020",
					goals_total: "1",
					passes_total: "155",
					tackles_total: "8",
					shots_total: "3",
					goals_conceded: "1"
				},

				{
					id: 6,
					position: "defeder",
					image:
						"https://www.realmadrid.com/en/special-features/shirts-and-kits/assets/images/content/milestones/2013/hitodeportivo13.jpg",
					attack: "38",
					defense: "50",
					player_id: "747",
					season: "2019-2020",
					goals_total: "0",
					passes_total: "145",
					tackles_total: "9",
					shots_total: "1",
					goals_conceded: "1"
				}
			]
		},

		actions: {
			addContact(contact, history) {
				console.log("vacio", contact);
				fetch("https://3000-cddd9ece-0bb6-467e-976a-7594d5aa3c87.ws-us1.gitpod.io/user", {
					method: "POST",
					body: JSON.stringify(contact),
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
							agenda: store.contact.concat(data)
						});
						history.push("/");
					})
					.catch(error => {
						//error handling
						console.log("hubo un error en fetch save", error);
						alert(error);
					});
			}

			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;
