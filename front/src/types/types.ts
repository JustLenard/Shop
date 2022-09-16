export interface IAttribute {
    displayValue: string
    value: string
}

export interface IAttributeSet {
    name: string
    // type: 'color' | 'size
    type: string
    items: Array<IAttribute>
}
