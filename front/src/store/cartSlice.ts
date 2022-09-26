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

			sessionStorage.setItem('cartObj', JSON.stringify(state.cartItems))

			const objFromSessionStorage = sessionStorage.getItem('cartObj')
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

		applyStateFromSessionStorage: (state, action: PayloadAction<ICartState>) => {
			state = action.payload
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
	applyStateFromSessionStorage,
	addItem,
	removeFromCart,
	clearCart,
	increaseItemAmount,
} = cartSlice.actions

export default cartSlice.reducer
