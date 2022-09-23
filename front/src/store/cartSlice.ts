import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../types/types'

export interface CartState {
	cartItems: Array<ICartItem>
	totalItemsAmount: number
	totalItemsPrice: number
}

const initialState: CartState = {
	cartItems: [],
	totalItemsAmount: 0,
	totalItemsPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ICartItem>) => {
			state.cartItems.push(action.payload)
			state.totalItemsAmount += 1
		},

		// removeItem: (state) => {
		// 	state.cartItems -= 1
		// },

		// increaseAmount: (state, action: PayloadAction<number>) => {
		// 	state.cartItems += action.payload
		// },
		// decreaseAmount: ()
	},
})

// Action creators are generated for each case reducer function
export const {
	addItem,
	// removeItem: decrement,
	// increaseAmount: incrementByAmount,
} = cartSlice.actions

export default cartSlice.reducer
