import { configureStore } from '@reduxjs/toolkit'
import searchSliceReducer from "./redusers/searchSlice";
import sortSliceReducer from "./redusers/sortSlice";
import cartSliceReducer from "./redusers/cartSlice";

export const store = configureStore({
    reducer: {
        search: searchSliceReducer,
        sort: sortSliceReducer,
        cart: cartSliceReducer
    },
})