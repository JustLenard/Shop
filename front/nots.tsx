interface IPrice {
    symbol: symbol
    shortName: string
    longName: string
    price: number
}

// interface ISize{

// }

// interface IColor{

// }

interface IProduct {
    name: string
    photos: string[]
    prices: IPrice[]
    description: string
    category: string
}
