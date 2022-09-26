import React from 'react'
import * as S from './styles/SmallCartItem.styles'
import animeGirl from '../../../assets/images/animeGirl.jpeg'
import { XIconSVG } from '../../../assets/icons'
import { ISmallCartItem } from '../../../types/types'
import { routes } from '../../../routing/routes'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../store/cartSlice'
import { SingleColor } from '../../productOptions'
import Attribute from '../../productOptions/singleOption/Attribute'

const SmallCartItem: React.FC<ISmallCartItem> = ({
	id,
	name,
	image,
	itemsAmount,
	totalPrice,
	selectedAttributes,
}) => {
	const dispatch = useDispatch()

	const removeFromRedux = () => {
		dispatch(removeFromCart(id))
	}

	console.log('This is selectedAttributes', selectedAttributes)

	const productRoute = `${routes.singleProductsPage}:${id}`
	return (
		<S.SmallCartItem>
			<S.ImageWrapper href={productRoute}>
				<img src={image} alt="product" />
			</S.ImageWrapper>
			<S.AttributesAndName href={productRoute}>
				<div>{name}</div>
				<S.Attributes>
					{selectedAttributes.map((attribute) => {
						return <Attribute attribute={attribute} key={attribute.type} />
					})}
				</S.Attributes>
			</S.AttributesAndName>
			<S.Amount>{itemsAmount}</S.Amount>
			<S.Price>{totalPrice}</S.Price>
			<S.XButton onClick={removeFromRedux}>
				<XIconSVG />
			</S.XButton>
		</S.SmallCartItem>
	)
}

export default SmallCartItem
