import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, { payload }) => {
            const product = payload.product || payload;
            const quantity = payload.quantity || 1;
            const productId = String(product._id || product.id);
            const productPrice = product.price || 0;
            
            const existingItem = state.cartItems.find(item => item.productId === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice = existingItem.quantity * productPrice;
                return;
            }
            
            state.cartItems.push({
                id: Date.now().toString(),
                productId,
                productName: product.name || product.title || 'Без названия',
                productImg: product.image || product.productImg || product.imageUrl || '',
                productPrice,
                quantity,
                totalPrice: quantity * productPrice,
            });
        },

        removeItemFromCart: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(
                item => item.id !== payload.cartItemId
            );
        },

        updateCartItemQuantity: (state, { payload }) => {
            const { productId, quantity } = payload;
            const cartItem = state.cartItems.find(item => item.productId === productId);
            
            if (cartItem) {
                cartItem.quantity = Math.max(1, quantity);
                cartItem.totalPrice = cartItem.quantity * cartItem.productPrice;
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
        }
    },
});

export const { 
    addItemToCart, 
    removeItemFromCart, 
    updateCartItemQuantity, 
    clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;