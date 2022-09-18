import React from 'react'
import * as S from './styles/Price.styles'

interface Props {
    symbol: string
    price: number
}

const Price: React.FC<Props> = ({ symbol, price }) => {
    return (
        <S.Container>
            <S.OptionName>Price:</S.OptionName>
            <S.Price>{`${symbol}  ${price}`}</S.Price>
        </S.Container>
    )
}

export default Price
