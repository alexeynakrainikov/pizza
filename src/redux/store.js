import { configureStore } from '@reduxjs/toolkit'
import searchSliceReducer from "./redusers/searchSlice";
import categorySliceReducer from "./redusers/categorySlice";
import sortSliceReducer from "./redusers/sortSlice";
import ascSliceReducer from "./redusers/ascSlice";

export const store = configureStore({
    reducer: {
        search: searchSliceReducer,
        activeCategory: categorySliceReducer,
        sort: sortSliceReducer,
        asc: ascSliceReducer
    },
})