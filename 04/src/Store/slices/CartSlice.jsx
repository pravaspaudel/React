import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
