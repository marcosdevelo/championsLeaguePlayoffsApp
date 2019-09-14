const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			player: [
				{
					id: 1,
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
