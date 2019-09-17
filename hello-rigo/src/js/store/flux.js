const getState = ({ getStore, setStore }) => {
	//, getActions
	return {
		store: {
			users: [],
			players: []
		},

		actions: {
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
