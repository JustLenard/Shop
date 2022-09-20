import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { routes } from '../../routing/routes'
import { GlobalContext } from '../layout/Layout'
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
    category: string
}

const ProductCard: React.FC<IProductCard> = ({
    gallery,
    name,
    id,
    prices,
}: IProductCard) => {
    const navigate = useNavigate()
    const { currency } = useContext(GlobalContext)

    const handleClick = () => {
        navigate(`${routes.singleProductPage}:${id}`, { state: id })
    }

    const correctPrice =
        prices.find((priceObj) => priceObj.currency === currency) || prices[0]

    return (
        <S.CardBody onClick={handleClick}>
            <S.ImageWrapper>
                <img src={gallery || animeGirl} alt="product" />
            </S.ImageWrapper>
            <S.Title>{name}</S.Title>
            <S.Price>
                {`${correctPrice.symbol}  ${correctPrice.amount.toFixed(2)}`}
            </S.Price>
        </S.CardBody>
    )
}

export default ProductCard
