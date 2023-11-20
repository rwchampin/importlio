// src/features/product/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products: [],
    selectedProducts: [],
} as any;

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setSelectedProducts: (state, action) => {
            state.selectedProducts = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    },
});


export const {
    setSelectedProducts,
    setProducts
} = productSlice.actions;
export default productSlice.reducer;
