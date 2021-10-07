import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./stores";
import "./App.css";

import Navbar from "./components/Navbar";

import Add from "./pages/Add";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Navbar />
				<Switch>
					<Route path="/detail/:id">
						<Detail />
					</Route>
					<Route path="/edit/:id">
						<Edit />
					</Route>
					<Route path="/add">
						<Add />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Provider>
		</Router>
	);
}

export default App;
