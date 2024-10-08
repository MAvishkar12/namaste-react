import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items:[],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCard: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
