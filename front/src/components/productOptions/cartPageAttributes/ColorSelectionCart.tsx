import React, { useState } from 'react'
import * as S from '../styles/Color.styles'
import { ICartPageAttributes, IAttribute } from '../../../types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const ColorSelectionCart: React.FC<ICartPageAttributes> = ({
	atribType,
	cartItemId,
	attributeSet,
}) => {
	const { name, items } = attributeSet

	const itemsInCart = useSelector((state: RootState) => state.cart.cartItems)
	const currentProduct = itemsInCart.find((product) => product.id === cartItemId)

	const selectedColor = currentProduct?.selectedAttributes.find(
		(atrib) => atrib.type === atribType
	)

	// items.find()

	console.log('This is items', items)
	console.log('This is selectedColor', selectedColor)

	const [selected, setSelected] = useState(0)

	const handleClick = (size: IAttribute, index: number) => {
		setSelected(index)
	}

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
