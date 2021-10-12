import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./reducers/portfolioReducer";
import translationReducer from "./reducers/translationReducer";

const store = configureStore({
	reducer: {
		translation: translationReducer,
		portfolio: portfolioReducer,
	},
});

export default store;
