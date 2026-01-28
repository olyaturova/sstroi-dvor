import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => {
        const total = cartItems.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
        return +total.toFixed(2);
    }
);

export const selectTotalArticles = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)
);

export const selectCartItemById = createSelector(
    [selectCartItems, (state, productId) => productId],
    (cartItems, productId) => cartItems.find(item => item.productId === productId)
);

export const selectCartIsEmpty = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.length === 0
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.length
);