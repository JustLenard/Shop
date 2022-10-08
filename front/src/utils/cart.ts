import { IAttributeWithSelection, ICartItem, IProduct } from '../types/types'

// Count all the items that are in the cart and return the number
export const getAmountOfItemsInCart = (cartItems: Array<ICartItem>) => {
	let itemsAmount = 0
	cartItems.forEach((item) => {
		itemsAmount += item.amount
	})
	return itemsAmount
}

//Make a unique Id for the for the items in the cart made out of the item id and it's options name combined.
export const createUniqueCartItemId = (
	selectedAttributes: Array<IAttributeWithSelection>,
	product: IProduct
) => {
	const id =
		selectedAttributes
			.map((atrib: IAttributeWithSelection) => {
				return atrib.value
			})
			.sort() // <- important !

			.join('') + `-${product.id}`

	return id
}
