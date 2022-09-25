export type categories = 'All' | 'Women' | 'Men'

export interface IAttribute {
	displayValue: string
	value: string
}

export interface IAttributeWithSelection extends IAttribute {
	type: categories
}

export interface ICurrencyObj {
	currency: string
	symbol: string
}

export interface IAttributeSet {
	name: string
	type: categories
	items: Array<IAttribute>
}

export interface IAttributeProps {
	attributeSet: IAttributeSet
	addAttributes: (attribute: IAttribute, attributeSet: IAttributeSet) => void
}

export interface IPrice {
	symbol: string
	currency: string
	amount: number
}

export interface IProduct {
	id: string
	brand: string
	name: string
	description: string
	category: categories
	gallery: string[]
	attributes: Array<IAttributeSet>
	prices: Array<IPrice>
}

export interface ICartItem {
	product: IProduct
	selectedAttributes: Array<IAttributeWithSelection>
	amount: number
	id: string
}

export interface ISmallCartItem {
	id: string
	name: string
	image: string
	itemsAmount: number
	totalPrice: string
}
