import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-center h-100">
					<div className="card">
						<div className="card-header">
							<h3>Sign Up</h3>
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<input type="text" className="form-control" placeholder="first name" />
								</div>
								<div className="input-group form-group">
									<input type="text" className="form-control" placeholder="last name" />
								</div>
								<div className="input-group form-group">
									<input type="text" className="form-control" placeholder="email address" />
								</div>
								<div className="input-group form-group">
									<input type="text" className="form-control" placeholder="set up a password" />
								</div>
								<div />
								<div className="form-group">
									<input type="submit" value="Sign Up" className="btn float-right login_btn" />
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
	}
}
