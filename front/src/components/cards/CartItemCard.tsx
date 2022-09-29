import React, { useContext, useState } from 'react'
import * as S from './styles/CartItemCard.styles'
import { ICartItem } from '../../types/types'
import { useDispatch } from 'react-redux'
import { decreaseItemAmount, increaseItemAmount } from '../../store/cartSlice'
import { AttributesCartPage, Price } from '../productOptions'
import { ChevronLeftSVG, ChevronRightSVG } from '../../assets/icons'
import { getCorrectPrice } from '../../utils/prices'
import { GlobalContext } from '../layout/Layout'

const CartItemCard: React.FC<ICartItem> = ({ id, selectedAttributes, amount, product }) => {
	const { brand, name, description, category, gallery, attributes, prices } = product
	const dispatch = useDispatch()
	const [imageIndex, setImageIndex] = useState(0)

	const { currencyObj } = useContext(GlobalContext)
	const correctPrice = getCorrectPrice(product.prices, currencyObj)

	const incereaseAmount = () => {
		dispatch(increaseItemAmount(id))
	}

	const decreaseAmount = () => {
		dispatch(decreaseItemAmount(id))
	}

	const showPreviousImage = () => {
		if (imageIndex > 0) {
			return setImageIndex(imageIndex - 1)
		}
		return setImageIndex(gallery.length - 1)
	}

	const showNextImage = () => {
		if (imageIndex === gallery.length - 1) {
			return setImageIndex(0)
		}
		return setImageIndex(imageIndex + 1)
	}

	return (
		<S.Container>
			<S.Content>
				<S.ProductName>{name}</S.ProductName>
				<S.BrandName>{brand}</S.BrandName>
				{attributes.map((atrib) => {
					return (
						<AttributesCartPage attributeSet={atrib} cartItemId={id} key={atrib.type} />
					)
				})}
				<Price price={correctPrice} />
			</S.Content>
			<S.PlusMinusContainer>
				<S.PlusMinus onClick={incereaseAmount}>+</S.PlusMinus>
				{amount}
				<S.PlusMinus onClick={decreaseAmount}>-</S.PlusMinus>
			</S.PlusMinusContainer>
			<S.ImageWrapper>
				<img src={gallery[imageIndex]} alt={'product'} />
				<S.ChevronWrapper>
					<button onClick={showPreviousImage}>
						<ChevronLeftSVG />
					</button>
					<button onClick={showNextImage}>
						<ChevronRightSVG />
					</button>
				</S.ChevronWrapper>
			</S.ImageWrapper>
		</S.Container>
	)
}

export default CartItemCard
