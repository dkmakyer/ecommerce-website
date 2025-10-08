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
            const existingItem = state.cartItems.find((cartItem) => cartItem.title === item.title);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.subtotal = existingItem.price * existingItem.quantity;
            } else {
                state.cartItems.push({ ...item, quantity: 1, subTotal: item.price });
            }

            state.totalQuantity += 1;
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.subTotal, 0);
        },
        removeFromCart: (state, action) => {
            const itemToRemove = action.payload;
            state.cartItems = state.cartItems.filter((item => item.title != itemToRemove));
            state.totalQuantity--;
        },
        updateQuantity: (state, action) => {
            const { title, quantity, price, image } = action.payload;
            const existingItem = state.cartItems.find(item => item.title === title);

            if (existingItem) {
                existingItem.quantity = quantity;
                existingItem.subTotal = existingItem.price * existingItem.quantity;

                if (price) existingItem.price = price;
                if (image) existingItem.image = image;
            } else {
                state.cartItems.push({
                    title,
                    quantity,
                    price: price || 0,
                    image: image || "",
                    subTotal: (price || 0) * quantity,
                });
            }

            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.subTotal, 0);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;