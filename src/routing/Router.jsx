import React from "react";
import { Route } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Router = ({ locale, ...rest }) => {
	return (
		<>
			<Header locale={locale} />
			<Route {...rest} />
			<Footer text={locale.footer} />
		</>
	);
};

export default Router;
