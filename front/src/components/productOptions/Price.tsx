import React from 'react'
import * as S from './styles/Price.styles'

interface Props {
	price: string
}

const Price: React.FC<Props> = ({ price }) => {
	return (
		<S.Container>
			<S.OptionName>Price:</S.OptionName>
			<S.Price>{price}</S.Price>
		</S.Container>
	)
}

export default Price
