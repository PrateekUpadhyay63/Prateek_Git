import React, {useEffect, useState} from "react";
import Nav from "./Search Component/Nav";
import Movie from "./Search Component/Movie";
import DateFilter from "./Calender Component/DateFilter";
import NavBarComponent from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signup from "./Signup";
import LoginPage from "./login";
import Main from "./Main";
import ErrorPage from "./ErrorPage";
import Drop from "./Drop";
import Home from "./Home";
import "../App.css";
// https://api.jikan.moe/v3/search/anime?q=genre={genre}

function App() {
	const [valid, setValid] = useState(false);
	const [localStore, setLocalStore] = useState();

	useEffect(() => {
		if (localStorage.length > 0) setValid(true);
		else setValid(false);
	}, [localStore]);

	return (
		<div>
			<BrowserRouter>
				<NavBarComponent
					valid={valid}
					setValid={setValid}
					localStore={localStore}
					setLocalStore={setLocalStore}
				/>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/Nav" component={Nav} />
					<Route exact path="/Signup" component={Signup} />
					{/* <Route exact path="/login" component={LoginPage} /> */}
					<Route
						exact
						path="/login"
						render={props => (
							<LoginPage
								valid={valid}
								setValid={setValid}
								localStore={localStore}
								setLocalStore={setLocalStore}
							/>
						)}
					/>
					<Route exact path="/DateFilter" component={DateFilter} />
					<Route path="*" component={ErrorPage} />
				</Switch>
			</BrowserRouter>
			{/* </Home> */}
			{/* <DateFilter/> */}

			{/* <Drop/> */}
		</div>
	);
}

export default App;
