import React from 'react'
import * as S from './MoneyDropdown.styles'

interface Props {}

const MoneyDropdown: React.FC<Props> = () => {
    return (
        <S.Wrapper>
            <S.CurrentCurrency>asdf</S.CurrentCurrency>
            <S.Dropdown></S.Dropdown>
        </S.Wrapper>
    )
}

export default MoneyDropdown
