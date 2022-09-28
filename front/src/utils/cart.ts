import { IAttributeWithSelection, ICartItem, IProduct } from '../types/types'

export const getAmountOfItemsInCart = (cartItems: Array<ICartItem>) => {
	let itemsAmount = 0
	cartItems.forEach((item) => {
		itemsAmount += item.amount
	})
	return itemsAmount
}

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
