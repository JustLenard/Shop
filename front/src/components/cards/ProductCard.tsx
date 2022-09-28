import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartSVG } from '../../assets/icons'
import { routes } from '../../routing/routes'
import { IProductCard } from '../../types/types'
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

	const correctPrice =
		prices.find((priceObj) => priceObj.currency === currencyObj.currency) || prices[0]

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
			<S.Price>{`${correctPrice.symbol}  ${correctPrice.amount.toFixed(2)}`}</S.Price>
		</S.CardBody>
	)
}

export default ProductCard
