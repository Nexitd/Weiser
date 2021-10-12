import { createSlice } from "@reduxjs/toolkit";

export const portfolioReducer = createSlice({
  name: "portfolio",
  initialState: {
    id: 0,
    title: "",
    text: "",
    images: [],
  },

  reducers: {
    getFullPortfolioInfo: (state) => {

    },
  },
});



export default portfolioReducer.reducer;