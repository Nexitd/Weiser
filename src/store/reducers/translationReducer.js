import { createSlice } from "@reduxjs/toolkit";

export const translationReducer = createSlice({
	name: "translation",
	initialState: {
		translation: "rus",
	},

	reducers: {
		translate: state => {
			state.translation = "eng";
		},
	},
});

export const { translate } = translationReducer.actions;

export default translationReducer.reducer;
