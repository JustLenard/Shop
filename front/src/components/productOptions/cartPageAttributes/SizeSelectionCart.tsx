import React, { useState } from 'react'
import * as S from '../styles/Size.styles'
import {
	ICartPageAttributes,
	IAttributeSet,
	IAttribute,
	IAttributeWithSelection,
} from '../../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { changeSelectedAttributes } from '../../../store/cartSlice'

const SizeSelectionCart: React.FC<ICartPageAttributes> = ({
	atribType,
	attributeSet,
	cartItemId,
}) => {
	const dispatch = useDispatch()
	const { name, items } = attributeSet

	const itemsInCart = useSelector((state: RootState) => state.cart.cartItems)
	const currentProduct = itemsInCart.find((product) => product.id === cartItemId)

	const selectedAtrib = currentProduct?.selectedAttributes.find(
		(atrib) => atrib.type === atribType
	)

	const indexOfSelectedAtrib = items.findIndex((elem) => elem.value === selectedAtrib?.value)

	const [selected, setSelected] = useState(indexOfSelectedAtrib || 0)

	const handleClick = (atrib: IAttribute, index: number) => {
		setSelected(index)

		const newSelection: IAttributeWithSelection = {
			...atrib,
			type: atribType,
		}

		dispatch(changeSelectedAttributes({ newSelection, cartItemId }))
	}

	return (
		<S.Container>
			<S.OptionName>{name}</S.OptionName>

			<S.Wrapper>
				{items.map((size, index) => (
					<S.SizeContainer
						key={index}
						highlight={index === selected}
						onClick={() => handleClick(size, index)}
					>
						{size.displayValue}
					</S.SizeContainer>
				))}
			</S.Wrapper>
		</S.Container>
	)
}

export default SizeSelectionCart
