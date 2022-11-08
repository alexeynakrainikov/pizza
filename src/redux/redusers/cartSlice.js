import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const title = action.payload.title
            const price = action.payload.price
            const type = action.payload.type

            !state.cartItems.length ? state.cartItems.push(action.payload) :
                state.cartItems.find((item) => item.title === title && item.price === price && item.type === type) ?
                    state.cartItems.find((item) => item.title === title && item.price === price && item.type === type).counter++ :
                    state.cartItems.push(action.payload)
            state.totalPrice = state.totalPrice + price
        },
        deleteItem: (state, action) => {
            const title = action.payload.title
            const price = action.payload.price
            const type = action.payload.type
            const counter = action.payload.counter
            const item = state.cartItems.find((item) => item.title === title && item.price === price && item.type === type)

            if (action.payload.counter <= 1 || action.payload.delete) {
                state.cartItems.splice(state.cartItems.indexOf(item),1)
                state.totalPrice = state.totalPrice - price * counter
            } else {
                item.counter--
                state.totalPrice = state.totalPrice - price
            }
        },
        clearCart: (state) => {
            state.cartItems = []
            state.totalPrice = 0
        }
    },
})

export const {addItem, clearCart, deleteItem} = cartSlice.actions

export default cartSlice.reducer