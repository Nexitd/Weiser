import React from "react";
import Main from "./containers/Main/Main";
import PortfolioFull from "./containers/PortfolioFull/PortfolioFull";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./assets/styles/animate.css";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
	const { translation } = useSelector(state => state.translation);

	return (
		<BrowserRouter>
			<Route exact path="/" render={() => <Main locale={translation} />} />
			<Route path="/portfolio" render={() => <PortfolioFull title="test" />} />
		</BrowserRouter>
	);
};

export default App;
