import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: true,
}

export const ascSlice = createSlice({
    name: 'asc',
    initialState,
    reducers: {
        setAsc: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setAsc } = ascSlice.actions

export default ascSlice.reducer