import React, { useState } from 'react'
import * as S from './MoneyDropdown.styles'

interface Props {}

const money = [
    {
        currency: '$',
        name: 'USD',
    },
    {
        currency: 'Eur',
        name: 'euro',
    },
]

const MoneyDropdown: React.FC<Props> = () => {
    const [currentSelect, setCurrentSelect] = useState('dollas')

    const selectItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentSelect(e.target.value)
    }

    console.log('This is currentSelect', currentSelect)

    return (
        <S.Select value={currentSelect} onChange={(e) => selectItem(e)}>
            {money.map((item, index) => (
                <S.Option key={index} value={item.currency}>
                    {item.currency}
                    {item.name}
                </S.Option>
            ))}
        </S.Select>
    )
}

export default MoneyDropdown
