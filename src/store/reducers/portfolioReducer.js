import { createSlice } from "@reduxjs/toolkit";
import { rus, eng } from "../../utils/translation";

export const portfolioReducer = createSlice({
	name: "portfolio",
	initialState: {
		portfolioData: {},
	},

	reducers: {
		getRusFullPortfolioInfo: (state, workId) => {
			state.portfolioData = rus.portfolio.filter(el => el.id === +workId.payload)[0];
},

		getEngFullPortfolioInfo: (state, workId) => {
			state.portfolioData = eng.portfolio.filter(el => el.id === +workId.payload)[0];
		},
	},
});

// Отправить в роутер id портфолио и потом хуком эффекта его подцепить и в зависимости от locale.lang вызвать нужный редьюсер

export const { getEngFullPortfolioInfo, getRusFullPortfolioInfo } =
	portfolioReducer.actions;

export default portfolioReducer.reducer;
