import React, { useState } from 'react'
import * as S from './styles/CartItemCard.styles'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { ICartItem } from '../../types/types'
import { useDispatch } from 'react-redux'
import { decreaseItemAmount, increaseItemAmount } from '../../store/cartSlice'
import { AttributesCartPage } from '../productOptions'

const CartItemCard: React.FC<ICartItem> = ({ id, selectedAttributes, amount, product }) => {
	const { brand, name, description, category, gallery, attributes, prices } = product
	const dispatch = useDispatch()
	// const [amount, setAmount] = useState(1)

	const incereaseAmount = () => {
		dispatch(increaseItemAmount(id))
	}

	const decreaseAmount = () => {
		dispatch(decreaseItemAmount(id))
	}

	// console.log('This is attributes', attributes)

	// console.log('This is selectedAttributes', selectedAttributes)

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
			</S.Content>
			<S.PlusMinusContainer>
				<S.PlusMinus onClick={incereaseAmount}>+</S.PlusMinus>
				{amount}
				<S.PlusMinus onClick={decreaseAmount}>-</S.PlusMinus>
			</S.PlusMinusContainer>
			<S.ImageWrapper>
				<img src={gallery[0] || animeGirl} alt={'product'} />
			</S.ImageWrapper>
		</S.Container>
	)
}

export default CartItemCard
