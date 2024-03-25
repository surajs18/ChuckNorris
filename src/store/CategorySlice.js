import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setCategory } = categorySlice.actions;
export const selectCategory = (state) => state.category.value;

export default categorySlice.reducer;
