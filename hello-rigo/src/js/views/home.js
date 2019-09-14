import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class Home extends React.Component {
	render() {
		return (
			<div className="container home">
				<div className="d-flex justify-content-center h-100">
					<div className="card">
						<div className="card-header">
							<h3>Sign In</h3>
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-user" />
										</span>
									</div>
									<input type="text" className="form-control" placeholder="email address" />
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-key" />
										</span>
									</div>
									<input type="password" className="form-control" placeholder="password" />
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox" />
									Remember Me
								</div>
								<div className="form-group">
									<Link to="/PickTeam">
										<input type="submit" value="Login" className="btn float-right login_btn" />
									</Link>
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links">
								<Link to="/demo">Sign Up</Link>
							</div>
							<div className="d-flex justify-content-center">
								<a href="#">Forgot your password?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
