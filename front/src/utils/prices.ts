import currency from 'currency.js'
import { symbolName } from 'typescript'
import { ICartItem, ICurrencyObj } from '../types/types'

export const getPriceObj = (cartItem: ICartItem, selectedCurrency: ICurrencyObj) => {
	return (
		cartItem.product.prices.find((price) => price.currency === selectedCurrency.currency) ||
		cartItem.product.prices[0]
	)
}

export const getTotalPriceOfCart = (
	cartItems: Array<ICartItem>,
	selectedCurrency: ICurrencyObj
) => {
	const pricesArr = cartItems.map((item) => {
		const price = getPriceObj(item, selectedCurrency).amount
		return currency(price).multiply(item.amount).value
	})

	let totalPrice = 0

	pricesArr.forEach((price) => {
		totalPrice = currency(totalPrice).add(price).value
	})

	return currency(totalPrice, { symbol: selectedCurrency.symbol }).format()
}
