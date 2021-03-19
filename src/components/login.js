import React, {useContext, useState} from "react";
import {Alert} from "react-bootstrap";
import Home from "./Home";
// import FormPage from "./Signup";
import "../App.css";
import {propTypes} from "react-bootstrap/esm/Image";
import {ApiContext} from "./ApiContext";
import ListApp from "./Main";


const LoginPage = ({valid, setValid, localStore, setLocalStore}) => {
	const [emaillog, setEmaillog] = useState(" ");
	const [passwordlog, setPasswordlog] = useState(" ");

	const [flag, setFlag] = useState(false);

	const [home, setHome] = useState(true);
	const [FormPage, setSignup] = useState(true);
	const {truevalue, settruevalue} = useContext(ApiContext);
	console.log("Hello how are you from login valid", truevalue);
	//   function handleClick() {
	//     setSignup(!FormPage);
	//   }

	//   const fillStorage = () => {
	//     setLocalStore(false);
	//     console.log("LOCALSTORE ", localStore);
	//     // setValid(!valid);
	//     // localStorage.clear();
	//   };

	function handleLogin(e) {
		var obj;
		e.preventDefault();

		// let name = localStorage.getItem("name").replace(/"/g, "");
		// let phone = localStorage.getItem("phone").replace(/"/g, "");
		// let pass = localStorage.getItem("Password").replace(/"/g, "");
		obj = JSON.parse(localStorage.getItem("data"));
		console.log("obj ", obj);
		// .replace(/"/g,"") is used to remove the double quotes for the string

		if (!emaillog || !passwordlog) {
			setFlag(true);
			console.log("EMPTY");
		} else if (passwordlog != obj.password && emaillog != obj.mail) {
			setFlag(true);
		} else {
			setHome(!home);
			setFlag(false);
			console.log(passwordlog + "" + emaillog);
			console.log("True value in log", truevalue);
			settruevalue(!truevalue);
			//app.js

			console.log("LOCALSTORE ", localStore);

			setLocalStore && setLocalStore(false);
			//   setValid(true);
		}
	}
	// function infoClick() {
	// 		setInfo(!info);
	// 	}

	return (
		<div>
			{/* <div className="container" onClick={infoClick}>
					<h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
				</div> */}
			{console.log("login props", setLocalStore)}
			{truevalue ? (
				<ListApp />
			) : (
				<>
					<div className="container">
						<form className="login" onSubmit={handleLogin}>
							<h3>Login</h3>
							<div className="group">
								<label className="Label">Email</label>
								<br />
								<input
									type="email"
									className="input"
									placeholder="Enter email"
									onChange={event => setEmaillog(event.target.value)}
								/>
							</div>

							<div className="group">
								<label className="Label">Password</label>
								<br />
								<input
									type="password"
									className="input"
									placeholder="Enter password"
									onChange={event => setPasswordlog(event.target.value)}
								/>
							</div>

							<button type="submit" className="Butn">
								Login
							</button>

							{flag && (
								<Alert color="primary" variant="warning">
									Fill correct Info else keep trying.
								</Alert>
							)}
						</form>
					</div>
				</>
			)}
		</div>
	);
};

export default LoginPage;
