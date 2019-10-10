import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { LandingPage } from "./views/landingPage";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import { Single } from "./views/single";
import { PickTeam } from "./views/pickTeam";
import { barcelonaGame } from "./views/barcelonaGame";
import injectContext from "./store/appContext";
import { JuventusGame } from "./views/juventusGame";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Match } from "./component/match.js";

import { PlayerCaruosel } from "./component/PlayerCarousel.js";

import { Fight } from "./component/fight.js";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/PickTeam" component={PickTeam} />
						<Route exact path="/juventusGame" component={JuventusGame} />
						<Route exact path="/match" component={Match} />
						<Route exact path="/Fight" component={Fight} />
						<Route exact path="/barcelonaGame" component={barcelonaGame} />
						<Route exact path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default injectContext(Layout);
