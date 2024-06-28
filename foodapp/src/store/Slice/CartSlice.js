import { createSlice } from '@reduxjs/toolkit';

const storedItems = localStorage.getItem('cartItems');
const initialState = {
  items: storedItems ? JSON.parse(storedItems) : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item._id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
