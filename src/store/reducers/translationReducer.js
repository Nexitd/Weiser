import { createSlice } from "@reduxjs/toolkit";
import { rus, eng } from "../../utils/translation";


export const translationReducer = createSlice({
	name: "translation",
	initialState: {
		translation: rus,
	},

	reducers: {
		translateToRus: (state) => {
			state.translation = rus;
		},

		translateToEng: (state) => {
			state.translation = eng;
		},
	},
});

export const { translateToRus, translateToEng } = translationReducer.actions;

export default translationReducer.reducer;
