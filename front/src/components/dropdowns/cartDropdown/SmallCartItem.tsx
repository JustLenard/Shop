import React from 'react'
import * as S from './styles/SmallCartItem.styles'
import animeGirl from '../../../assets/images/animeGirl.jpeg'
import { XIconSVG } from '../../../assets/icons'
import { ISmallCartItem } from '../../../types/types'
import { routes } from '../../../routing/routes'

const SmallCartItem: React.FC<ISmallCartItem> = ({
	id,
	name,
	image,
	itemsAmount,
	totalPrice,
	currencySymbol,
}) => {
	return (
		<S.SmallCartItem>
			<S.ImageAndName href={`${routes.singleProductsPage}:${id}`}>
				<div>
					<img src={image} alt="product" />
				</div>
				<div>{name}</div>
			</S.ImageAndName>
			<S.Amount>{itemsAmount}</S.Amount>
			<S.Price>{`${totalPrice}${currencySymbol}`}</S.Price>
			<S.XButton>
				<XIconSVG />
			</S.XButton>
		</S.SmallCartItem>
	)
}

export default SmallCartItem
