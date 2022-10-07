import React, { useState } from 'react'
import * as S from '../styles/Size.styles'
import { IProductPageAttributes, IAttribute } from '../../../types/types'

const SizeSelectionProduct: React.FC<IProductPageAttributes> = ({
	attributeSet,
	addAttributes,
}) => {
	const { name, items } = attributeSet

	const [selected, setSelected] = useState(0)

	const handleClick = (size: IAttribute, index: number) => {
		setSelected(index)

		addAttributes(size, attributeSet)
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

export default SizeSelectionProduct
