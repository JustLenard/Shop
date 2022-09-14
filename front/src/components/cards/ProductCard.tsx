import React from 'react'
import { useNavigate } from 'react-router-dom'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { routes } from '../../routing/routes'
import * as S from './styles/ProductCard.styles'

interface Price {
    currency: string
    amount: number
}
export interface IProductCard {
    title?: string
    gallery?: string[]
    id: string
    // prices?: Price
    prices: {
        currency: string
        amount: number
    }
}

const ProductCard: React.FC<IProductCard> = ({
    gallery,
    title,
    id,
    prices,
}: IProductCard) => {
    const navigate = useNavigate()
    // console.log('This is image', image)
    // console.log(title, currency, price)

    // image =
    //     'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61EdREF13eL._AC_SY550._SX._UX._SY._UY_.jpg'

    const handleClick = () => {
        navigate(`${routes.singleProductPage}:${id}`)
    }

    console.log('This is image', gallery)

    return (
        <S.CardBody onClick={handleClick}>
            <S.ImageWrapper>
                <img src={gallery || animeGirl} alt="product" />
            </S.ImageWrapper>
            <S.Title>{title}</S.Title>
            <S.Price>
                {prices.currency}
                {prices.amount}
            </S.Price>
        </S.CardBody>
    )
}

export default ProductCard
