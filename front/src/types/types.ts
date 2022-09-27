export type categories = 'All' | 'Women' | 'Men'

export type attributeTypes = 'color' | 'size'

export interface IAttribute {
	displayValue: string
	value: string
}

export interface IAttributeWithSelection extends IAttribute {
	type: attributeTypes
}

export interface ICurrencyObj {
	currency: string
	symbol: string
}

export interface IAttributeSet {
	name: string
	type: attributeTypes
	items: Array<IAttribute>
}

export interface IProductPageAttributes {
	attributeSet: IAttributeSet
	addAttributes: (attribute: IAttribute, attributeSet: IAttributeSet) => void
}

export interface ICartPageAttributes {
	attributeSet: IAttributeSet
	cartItemId: string
	atribType: attributeTypes
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
	selectedAttributes: Array<IAttributeWithSelection>
}
