import React from 'react'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import * as S from './styles/ProductCard.styles'

interface Props {
    image?: string
    title?: string
    currency?: string
    price?: number
}

const ProductCard: React.FC<Props> = ({
    currency,
    image,
    title,
    price,
}: Props) => {
    return (
        <S.CardBody>
            <S.ImageWrapper>
                <img src={image || animeGirl}></img>
            </S.ImageWrapper>
            <S.Title>{title}</S.Title>
            <S.Price>
                {currency}
                {price}
            </S.Price>
        </S.CardBody>
    )
}

export default ProductCard
