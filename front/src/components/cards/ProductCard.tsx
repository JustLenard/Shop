import React from 'react'
import { useNavigate } from 'react-router-dom'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { routes } from '../../routing/routes'
import * as S from './styles/ProductCard.styles'

interface IPrice {
    currency: string
    amount: number
    symbol: string
}
export interface IProductCard {
    name?: string
    gallery?: string[]
    id: string
    prices: Array<IPrice>
}

const ProductCard: React.FC<IProductCard> = ({
    gallery,
    name,
    id,
    prices,
}: IProductCard) => {
    const navigate = useNavigate()
    // console.log('This is image', image)
    // console.log(name, currency, price)

    // image =
    //     'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61EdREF13eL._AC_SY550._SX._UX._SY._UY_.jpg'

    const handleClick = () => {
        navigate(`${routes.singleProductPage}:${id}`, { state: id })
    }

    console.log('This is prices', prices)

    return (
        <S.CardBody onClick={handleClick}>
            <S.ImageWrapper>
                <img src={gallery || animeGirl} alt="product" />
            </S.ImageWrapper>
            <S.Title>{name}</S.Title>
            <S.Price>
                {prices[0].currency}
                {prices[0].amount}
            </S.Price>
        </S.CardBody>
    )
}

export default ProductCard
