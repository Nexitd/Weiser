import { createSlice } from "@reduxjs/toolkit";
import { rus, eng } from "../../utils/translation";

const RUSSIAN_LANGUAGE_CODE = "ru-RU";

let language = window.navigator.language === RUSSIAN_LANGUAGE_CODE ? rus : eng;

export const translationReducer = createSlice({
	name: "translation",
	language: window.navigator.language,
	initialState: {
		translation: language,
	},

	reducers: {
		translateToRus: state => {
			state.translation = rus;
		},

		translateToEng: state => {
			state.translation = eng;
		},
	},
});

export const { translateToRus, translateToEng } = translationReducer.actions;

export default translationReducer.reducer;
