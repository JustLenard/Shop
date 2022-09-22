export type categories = 'All' | 'Women' | 'Men'

export interface IAttribute {
	displayValue: string
	value: string
}

export interface IAttributeSet {
	name: string
	type: string
	items: Array<IAttribute>
}

export interface IAttributeSetWithSelection extends IAttributeSet {
	selected: IAttribute
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
	selectedAttributes: Array<IAttributeSetWithSelection>
	amount: number
}
