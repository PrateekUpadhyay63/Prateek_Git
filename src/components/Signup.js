import React, {useState} from "react";
import {Form, Alert} from "react-bootstrap";
import LoginPage from "./login";
import "../App.css";

function FormPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	// const [profession, setProfession] = useState("");
	var obj={name, setName,email, setEmail,password, setPassword ,phone, setPhone}
	const [flag, setFlag] = useState(false);
	const [login, setLogin] = useState(true);
	const [info, setInfo] = useState(true);

	// on form submit...
	function handleFormSubmit(e) {
		e.preventDefault();

		if (!name || !email || !password || !phone) {
			setFlag(true);
		} else {
			setFlag(false);
			localStorage.setItem("data", JSON.stringify(obj));
			// localStorage.setItem("name", JSON.stringify(name));
			// localStorage.setItem("phone", JSON.stringify(phone));
			// localStorage.setItem("Email", JSON.stringify(email));
			// localStorage.setItem("Password", JSON.stringify(password));
			console.log("Saved in Local Storage");

			setLogin(!login);
		}
	}

	// Directly to the login page
	function handleClick() {
		setLogin(!login);
	}

	// Company Info
	// function infoClick() {
	// 	setInfo(!info);
	// }

	return (
		<>
			{/* <nav className="navbar navbar-light">
				<div className="container" onClick={infoClick}>
					<h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
				</div>
			</nav> */}
			{info ? (
				<div>
					{" "}
					{login ? (
						<form className="signUp container" onSubmit={handleFormSubmit}>
							<h3>Register</h3>

							<div className="group">
								<label className="Label">Name</label>
								<br />
								<input
									type="text"
									className="input"
									placeholder="Enter Full Name"
									name="name"
									required
									onChange={event => setName(event.target.value)}
								/>
							</div>

							<div className="group">
								<label className="Label">Phone No.</label>
								<br />
								<input
									type="text"
									className="input"
									placeholder="Enter 10 digit phone no"
									pattern="[0-9]{10}"
									onChange={event => setPhone(event.target.value)}
								/>
							</div>

							<div className="group">
								<label className="Label">Email</label>
								<br />
								<input
									type="email"
									className="input"
									placeholder="Enter E-mail"
									required
									onChange={event => setEmail(event.target.value)}
								/>
							</div>

							<div className="group">
								<label className="Label">Password</label>
								<br />
								<input
									type="password"
									className="input"
									placeholder="Enter password"
									onChange={event => setPassword(event.target.value)}
								/>
							</div>

						

							<button type="submit" className="Butn">
								Register
							</button>
							<p className="forgot-password">
								Already registered{" "}
								<a href="#" className="logLink" onClick={handleClick}>
									log in?
								</a>
							</p>
							{flag && (
								<Alert color="primary" variant="danger">
									I got it you are in hurry! But every Field is important!
								</Alert>
							)}
						</form>
					) : (
						<LoginPage />
					)}
				</div>
			) : (
				<div>
					<p>
						<strong>Phone:</strong> XXXXXXXXXX09
					</p>
					<p>
						<strong>Email:</strong> XXXXXXXX@gmail.com
					</p>
				</div>
			)}
		</>
	);
}

export default FormPage;
