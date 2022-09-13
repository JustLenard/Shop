import React from 'react'
import { useNavigate } from 'react-router-dom'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { routes } from '../../routing/routes'
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
    const navigate = useNavigate()
    console.log('This is image', image)

    image =
        'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61EdREF13eL._AC_SY550._SX._UX._SY._UY_.jpg'

    const handleClick = () => {
        navigate(routes.singleProductPage)
    }

    return (
        <S.CardBody onClick={handleClick}>
            <S.ImageWrapper>
                <img src={image || animeGirl} alt="product" />
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
