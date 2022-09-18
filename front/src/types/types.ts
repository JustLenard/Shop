export interface IAttribute {
    displayValue: string
    value: string
}

export interface IAttributeSet {
    name: string
    type: string
    items: Array<IAttribute>
    selected?: IAttribute
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
