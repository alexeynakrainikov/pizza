import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        name: "популярности",
        sortOption: "rating"
    },
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortValue: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setSortValue } = sortSlice.actions

export default sortSlice.reducer