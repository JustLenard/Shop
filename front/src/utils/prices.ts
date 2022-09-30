import currency from 'currency.js'
import { symbolName } from 'typescript'
import { ICartItem, ICurrencyObj, IPrice, IProduct } from '../types/types'

export const getPriceObj = (cartItem: ICartItem, selectedCurrency: ICurrencyObj) => {
	return (
		cartItem.product.prices.find((price) => price.currency === selectedCurrency.currency) ||
		cartItem.product.prices[0]
	)
}

export const getCorrectPrice = (prices: Array<IPrice>, selectedCurrency: ICurrencyObj) => {
	const priceObj =
		prices.find((price) => price.currency === selectedCurrency.currency) || prices[0]
	return currency(priceObj.amount, { symbol: priceObj.symbol }).format()
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

export const getTotalTaxAmount = (
	price: string,
	taxPercent: number,
	selectedCurrency: ICurrencyObj
) => {
	const totalPrice = currency(price, { symbol: selectedCurrency.symbol })
		.multiply(taxPercent)
		.divide(100)
		.format()

	return totalPrice
}

export const getTotalCartPriceWithTax = (
	price: string,
	taxPercent: number,
	selectedCurrency: ICurrencyObj
) => {
	const totalPrice = currency(price, { symbol: selectedCurrency.symbol })
		.multiply(taxPercent)
		.divide(100)
		.add(price)
		.format()

	return totalPrice
}
