import React, { useState } from 'react'
import * as S from './styles/CartItemCard.styles'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { SizeSelection, ColorsSelection } from '../productOptions/'
import { ICartItem } from '../../types/types'
import Attributes from '../productOptions/Attributes'

const CartItemCard: React.FC<ICartItem> = ({ id, selectedAttributes, amount, product }) => {
	const { brand, name, description, category, gallery, attributes, prices } = product
	// const [amount, setAmount] = useState(1)

	const incereaseAmount = () => {
		// return setAmount(amount + 1)
	}

	const decreaseAmount = () => {
		// if (amount > 1) {
		// 	return setAmount(amount - 1)
		// }
	}

	console.log('This is attributes', attributes)

	// const addAttributes

	console.log('This is selectedAttributes', selectedAttributes)

	return (
		<S.Container>
			<S.Content>
				<S.ProductName>{name}</S.ProductName>
				<S.BrandName>{brand}</S.BrandName>
				{attributes.map((atrib) => {
					return (
						<Attributes
							attributeSet={atrib}
							key={atrib.type}
							selectedAttributes={selectedAttributes}
						/>
					)
				})}
				{/* <S.Price>{price}</S.Price> */}
				{/* <Size name={'Size'} sizes={[{ size: 'xl' }, { size: 'sm' }]} />
                <Color
                    colors={[
                        { color: 'red' },
                        { color: 'blue' },
                        { color: 'green' },
                    ]}
                /> */}
			</S.Content>
			<S.PlusMinusContainer>
				<S.PlusMinus onClick={incereaseAmount}>+</S.PlusMinus>
				{amount}
				<S.PlusMinus onClick={decreaseAmount}>-</S.PlusMinus>
			</S.PlusMinusContainer>
			<S.ImageWrapper>
				<img src={gallery[0] || animeGirl} alt={'product'} />
			</S.ImageWrapper>
		</S.Container>
	)
}

export default CartItemCard
