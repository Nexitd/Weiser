import React from "react";
import Main from "./containers/Main/Main";
import PortfolioFull from "./containers/PortfolioFull/PortfolioFull";
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import Router from "./routing/Router";
import "./assets/styles/animate.css";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
	const { translation } = useSelector(state => state.translation, shallowEqual);

	return (
		<BrowserRouter>
			<Switch>
				<Router
					exact
					path="/"
					locale={translation}
					render={() => <Main locale={translation} />}
				/>
				<Router
					path="/portfolio/:id"
					locale={translation}
					render={() => <PortfolioFull locale={translation} />}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
