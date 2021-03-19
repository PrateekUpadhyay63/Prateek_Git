import React, {useEffect, useContext} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import "../App.css";
import logo from "../Images/logo.svg";
import {ApiContext} from "./ApiContext";
// import "fa-icons";
// import Nav from "./Nav";
// import Movie from "./Movie";

const NavBarComponent = ({valid, setValid, localStore, setLocalStore}) => {
	const {truevalue, settruevalue} = useContext(ApiContext);
	const logout = () => {
		setLocalStore(!localStore);
		setValid(!valid);
		// localStorage.clear();
		settruevalue(!truevalue);
	};
	return (
		<div className="Navbar">
			<div className="container">
				<Navbar>
					<Link className="linkLogo" to="/">
						<img src={logo} className="imgLogo"></img>{" "}
					</Link>
					<Nav className="ml-auto text-center">
						{/* <fa-icon class="bsSearch"></fa-icon> */}
						<Link className="links" to="/Nav">
							Search Anime
						</Link>
						{truevalue ? (
							<div>
								<a className="links" onClick={logout}>
									LOGOUT
								</a>

								<Link className="links" to="/DateFilter">
									Calender Search
								</Link>
							</div>
						) : (
							<div>
								<Link className="links" to="/Signup">
									Signup
								</Link>
								<Link className="links" to="/login">
									Login
								</Link>
							</div>
						)}

						{/* <Link className="links" to="/DateFilter">
							DropDown Search
						</Link> */}
					</Nav>
				</Navbar>
			</div>
		</div>
	);
};

export default NavBarComponent;
