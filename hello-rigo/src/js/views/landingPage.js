import React from "react";
import "../../styles/landingcarousel.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ReactDOM from "react-dom";
import { PlayerCaruosel } from "../component/PlayerCarousel.js";

export class LandingPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="PageNav">
					<Navbar bg="dark">
						<Navbar.Brand href="#home">
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/4/4d/UEFA_Champions_League_%282012%29.svg/revision/latest/scale-to-width-down/200?cb=20180731114846"
								className="d-inline-block align-top logochamp"
								width="30"
								height="30"
								alt="React Bootstrap logo"
							/>
						</Navbar.Brand>

						{/* </Navbar> */}

						{/* <div className="teamBar m-0 p-0">
					<Navbar bg="light">
						<Navbar.Brand href="#home"> */}
						<div className="container teamsbar">
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/9/98/Real_Madrid.png/revision/latest/scale-to-width-down/220?cb=20161111231747"
								className="d-inline-block align-top"
								width="29"
								height="40"
								alt="React Bootstrap logo"
							/>
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/4/47/FC_Barcelona_%28crest%29.svg/revision/latest/scale-to-width-down/200?cb=20190425113731"
								className="d-inline-block align-top barcelonalogo"
								width="36"
								height="32"
								alt="React Bootstrap logo"
							/>
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/4/46/Juventus_FC_logo_%28three_gold_stars%29.svg/revision/latest/scale-to-width-down/74?cb=20160618000018"
								className="d-inline-block align-top"
								width="23"
								height="40"
								alt="React Bootstrap logo"
							/>
							<img
								src="https://vignette.wikia.nocookie.net/logopedia/images/4/49/Liverpool_FC_logo_%28introduced_2012%29.svg/revision/latest/scale-to-width-down/130?cb=20120705223744"
								className="d-inline-block align-top"
								width="23"
								height="40"
								alt="React Bootstrap logo"
							/>
							<img
								src="https://mediacdn.mancity.com/-/media/images/shared/clubs/manchester-city-new-logo.ashx?mw=160&hash=D65C8BB3DE70E0284E65F4BC61BD7C653C877A3D"
								className="d-inline-block align-top"
								width="41"
								height="40"
								alt="React Bootstrap logo"
							/>
						</div>

						<DropdownButton id="dropdown-item-button" title="Dropdown button">
							<Dropdown.Item as="button">My profile</Dropdown.Item>
							<Dropdown.Item as="button">Log out</Dropdown.Item>
						</DropdownButton>

						{/* </div> */}
					</Navbar>
					<Link to="/login">
						<button type="button" className="btn btn-primary">
							Primary
						</button>
					</Link>
				</div>
				<div className="row h-50">
					<div className="col-6">
						<PlayerCaruosel />
					</div>{" "}
					<div className="col-4 mt-5 gameDescription">
						<p className="descriptionText">
							Each player gets a default attack and defense, based on real last game results you will get
							extra points for shots,passes,tackles and goals conceded. Enjoy!
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
