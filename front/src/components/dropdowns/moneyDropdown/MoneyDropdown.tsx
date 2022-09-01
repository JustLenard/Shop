import React from 'react'
import * as S from './MoneyDropdown.styles'

interface Props {}

const MoneyDropdown: React.FC<Props> = () => {
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
    return (
        // <S.Wrapper>
        //     <S.CurrentCurrency></S.CurrentCurrency>
        //     <S.Dropdown></S.Dropdown>
        // </S.Wrapper>
        <select>
            {/* <option>Fuck</option> */}
            {money.map((item, index) => (
                <option>
                    {item.currency}
                    {item.name}
                </option>
            ))}
        </select>
    )
}

export default MoneyDropdown
