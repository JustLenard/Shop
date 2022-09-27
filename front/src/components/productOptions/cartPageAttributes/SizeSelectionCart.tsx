import React, { useState } from 'react'
import * as S from '../styles/Size.styles'
import { ICartPageAttributes, IAttributeSet, IAttribute } from '../../../types/types'

const SizeSelectionCart: React.FC<ICartPageAttributes> = ({ attributeSet, cartItemId }) => {
	const { name, items } = attributeSet

	const [selected, setSelected] = useState(0)

	const handleClick = (size: IAttribute, index: number) => {
		setSelected(index)
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
