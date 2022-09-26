import React, { useState } from 'react'
import * as S from './styles/Color.styles'
import { IAttributeProps, IAttribute } from '../../types/types'

const ColorsSelection: React.FC<IAttributeProps> = ({ addAttributes, attributeSet }) => {
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

export default ColorsSelection
