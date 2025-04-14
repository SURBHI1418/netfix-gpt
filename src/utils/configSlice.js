import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",

  initialState: {
    languageConstants: "english",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.languageConstants = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
