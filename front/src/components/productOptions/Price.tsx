import React from 'react'
import * as S from './styles/Price.styles'

interface Props {
	price: string
	text?: string
}

const Price: React.FC<Props> = ({ text = 'Price:', price }) => {
	return (
		<S.Container>
			<S.OptionName>{text}</S.OptionName>
			<S.Price>{price}</S.Price>
		</S.Container>
	)
}

export default Price
