const getState = ({ getStore, setStore }) => {
	//, getActions
	return {
		store: {
			contact: []
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
