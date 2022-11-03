import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const categorySlice = createSlice({
    name: 'activeCategory',
    initialState,
    reducers: {
        setCategoryValue: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setCategoryValue } = categorySlice.actions

export default categorySlice.reducer