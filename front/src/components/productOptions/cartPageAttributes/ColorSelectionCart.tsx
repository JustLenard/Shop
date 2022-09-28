import React, { useState } from 'react'
import * as S from '../styles/Color.styles'
import { ICartPageAttributes, IAttribute, IAttributeWithSelection } from '../../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { changeSelectedAttributes } from '../../../store/cartSlice'

const ColorSelectionCart: React.FC<ICartPageAttributes> = ({
	atribType,
	cartItemId,
	attributeSet,
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

	// console.log('This is items', items)
	// console.log('This is selectedColor', selectedAtrib)
	return (
		<S.Container>
			<S.OptionName>{name}</S.OptionName>
			<S.Wrapper>
				{items.map((colorObj, index) => (
					<S.Color
						color={colorObj.value}
						key={index}
						highlight={index === selected}
						onClick={() => handleClick(colorObj, index)}
					></S.Color>
				))}
			</S.Wrapper>
		</S.Container>
	)
}

export default ColorSelectionCart
