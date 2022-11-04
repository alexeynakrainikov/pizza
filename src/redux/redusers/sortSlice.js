import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filter: {
        name: "популярности",
        sortOption: "rating"
    },
    activeCategory: 0,
    asc: true
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortValue: (state, action) => {
            state.filter = action.payload
        },
        setCategoryValue: (state, action) => {
            state.activeCategory = action.payload
        },
        setAsc: (state, action) => {
            state.asc = action.payload
        }
    },
})

export const { setSortValue,setCategoryValue,setAsc } = sortSlice.actions

export default sortSlice.reducer