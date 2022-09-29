import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartSVG } from '../../assets/icons'
import { routes } from '../../routing/routes'
import { IProductCard } from '../../types/types'
import { getCorrectPrice } from '../../utils/prices'
import { GlobalContext } from '../layout/Layout'
import * as S from './styles/ProductCard.styles'

const ProductCard: React.FC<IProductCard> = ({
	brand,
	gallery,
	name,
	id,
	prices,
}: IProductCard) => {
	const navigate = useNavigate()

	const { currencyObj } = useContext(GlobalContext)

	const handleClick = () => {
		navigate(`${routes.singleProductPage(id)}`, { state: id })
	}

	const correctPrice = getCorrectPrice(prices, currencyObj)

	return (
		<S.CardBody onClick={handleClick}>
			<S.ImageWrapper>
				<img src={gallery[0]} alt="product" />
				<S.MiniCart>
					<CartSVG />
				</S.MiniCart>
			</S.ImageWrapper>
			<S.Title>{name}</S.Title>
			<S.Brand>{brand}</S.Brand>
			<S.Price>{correctPrice}</S.Price>
		</S.CardBody>
	)
}

export default ProductCard
