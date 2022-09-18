const rates = {
    USD: 1,
    EUR: 0.99831449,
    GBP: 0.87561398,
    AUD: 1.4895718,
    JPY: 142.95039,
    RUB: 60.46256,
}

const symbols = ['$', '€', '£', 'A$', '¥', '₽']

const addAllPrices = (prices) => {
    const newPrices = Object.keys(rates).map((currency, i) => ({
        currency,
        symbol: symbols[i],
        amount: rates[currency] * prices[0].amount,
    }))
    return newPrices
}

module.exports = { addAllPrices, symbols }
