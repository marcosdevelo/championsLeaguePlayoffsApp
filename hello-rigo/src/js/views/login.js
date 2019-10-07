import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screen_name: null,
			password: null
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container loginPage">
							<div className="d-flex justify-content-center h-100">
								<div className="card logincard">
									<div className="card-header">
										<h3>Sign In</h3>
									</div>
									<div className="card-body">
										<form>
											{store.invalid && (
												<div className="alert alert-danger">Invalid Credentials</div>
											)}
											<div className="input-group form-group">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-user" />
													</span>
												</div>
												<input
													type="text"
													className="form-control"
													placeholder="screen_name"
													onChange={e => this.setState({ screen_name: e.target.value })}
												/>
											</div>
											<div className="input-group form-group">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-key" />
													</span>
												</div>
												<input
													type="password"
													className="form-control"
													placeholder="password"
													onChange={e => this.setState({ password: e.target.value })}
												/>
											</div>
											{/* <form>
												<label>
													<input type="checkbox" name="remember" /> Remember me
												</label>
											</form> */}
											<div className="form-group">
												{/* <Link to="/PickTeam"> */}
												<input
													onClick={() => {
														actions.login(this.state, this.props.history);
													}}
													type="button"
													value="Login"
													className="btn float-right login_btn"
												/>
												{/* </Link> */}
											</div>
										</form>
									</div>
									<h1 className="donthave">{"Don't Have An Account?"}</h1>
									<div className="card-footer signup1">
										<div className="d-flex justify-content-center links">
											<Link to="/signup">Sign Up</Link>
										</div>
										{/* <div className="d-flex justify-content-center">
											<a href="#">Forgot your password?</a> */}
										{/* </div> */}
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Login.propTypes = {
	history: PropTypes.object
};
