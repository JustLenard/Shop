import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../types/types'

export interface ICartState {
	cartItems: Array<ICartItem>
}

const initialState: ICartState = {
	cartItems: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ICartItem>) => {
			let item = state.cartItems.find((item) => item.id === action.payload.id)

			// If item with the same id is present, icrease the amount of this items in cart, otherwise create a new product to cart
			if (item !== undefined) {
				item.amount += action.payload.amount
			} else {
				state.cartItems.push(action.payload)
			}
		},

		removeFromCart: (state, acion: PayloadAction<string>) => {
			state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== acion.payload)
		},

		clearCart: (state) => {
			state.cartItems = []
		},

		increaseItemAmount: (state, acion: PayloadAction<string>) => {
			const product = state.cartItems.find((item) => item.id === acion.payload)

			if (product !== undefined) {
				product.amount += 1
			}
		},

		decreaseItemAmount: (state, acion: PayloadAction<string>) => {
			const product = state.cartItems.find((item) => item.id === acion.payload)

			if (product !== undefined) {
				product.amount -= 1
				if (product.amount === 0) {
					state.cartItems = state.cartItems.filter(
						(cartItem) => cartItem.id !== acion.payload
					)
				}
			}
		},
	},
})

// Action creators are generated for each case reducer function
export const { decreaseItemAmount, addItem, removeFromCart, clearCart, increaseItemAmount } =
	cartSlice.actions

export default cartSlice.reducer
