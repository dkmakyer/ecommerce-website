import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if(existingItem){
                existingItem.quantity += 1;
                existingItem.subtotal = existingItem.price * existingItem.quantity;
            }else{
                state.cartItems.push({...item, quantity: 1, subTotal: item.price});
            }

            state.totalQuantity += 1;
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.subTotal, 0);
        },
        removeFromCart: (state, action) => {
            const itemToRemove = action.payload;
            state.cartItems = state.cartItems.filter((item => item.id != itemToRemove.id));
            state.totalQuantity--;
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if(item){
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
                state.cartItems = [];
                state.totalQuantity = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;