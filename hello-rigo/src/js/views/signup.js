import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";
import "../../styles/demo.scss";
export class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name: null,
			email: null,
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
										<h3>Sign Up</h3>
									</div>
									<div className="card-body">
										<form>
											<div className="input-group form-group">
												<input
													type="text"
													className="form-control"
													placeholder="full name"
													onChange={e => this.setState({ full_name: e.target.value })}
												/>
											</div>
											<div className="input-group form-group">
												<input
													type="text"
													className="form-control"
													placeholder="email"
													onChange={e => this.setState({ email: e.target.value })}
												/>
											</div>
											<div className="input-group form-group">
												<input
													type="text"
													className="form-control"
													placeholder="screen name"
													onChange={e => this.setState({ screen_name: e.target.value })}
												/>
											</div>
											<div className="input-group form-group">
												<input
													type="text"
													className="form-control"
													placeholder="set up a password"
													onChange={e => this.setState({ password: e.target.value })}
												/>
											</div>
											<div />
											<div className="form-group">
												<input
													onClick={() => {
														actions.signup(this.state, this.props.history);
													}}
													type="button"
													value="Sign Up"
													className="btn float-right login_btn"
												/>
											</div>
										</form>
									</div>
									<div className="card-footer">
										<div className="d-flex justify-content-center links" />
										<div className="d-flex justify-content-center" />
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

Signup.propTypes = {
	history: PropTypes.object
};
