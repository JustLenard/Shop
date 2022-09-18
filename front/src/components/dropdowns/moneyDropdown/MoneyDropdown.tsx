import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../layout/Layout'
import * as S from './MoneyDropdown.styles'

interface Props {}

const money = [
    { currency: 'USD', symbol: '$' },
    { currency: 'EUR', symbol: '€' },
    { currency: 'GBP', symbol: '£' },
    { currency: 'AUD', symbol: 'A$' },
    { currency: 'JPY', symbol: '¥' },
    { currency: 'RUB', symbol: '₽' },
]

const MoneyDropdown: React.FC<Props> = () => {
    const { currency, setCurrency } = useContext(GlobalContext)

    const selectItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value)
    }

    console.log('This is currency', currency)

    return (
        <S.Select value={currency} onChange={(e) => selectItem(e)}>
            {money.map((item, index) => (
                <S.Option key={index} value={item.currency}>
                    {item.symbol} {item.currency}
                </S.Option>
            ))}
        </S.Select>
    )
}

export default MoneyDropdown
