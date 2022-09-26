import React, { useState } from 'react'
import * as S from './styles/CartItemCard.styles'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { Size, ColorsSelection } from '../productOptions/'
// import { ReactComponent as Cart } from './cart.svg'

interface Props {
	// product?: {
	//     title: string
	// }
	name: string
	price: number
	image?: string
}

const CartItemCard: React.FC<Props> = ({ image, name, price }) => {
	const [amount, setAmount] = useState(1)

	const incereaseAmount = () => {
		return setAmount(amount + 1)
	}

	const decreaseAmount = () => {
		if (amount > 1) {
			return setAmount(amount - 1)
		}
	}

	return (
		<S.Container>
			<S.Content>
				<S.ProductName>{name}</S.ProductName>
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
				<img src={image || animeGirl} alt={'product'} />
			</S.ImageWrapper>
		</S.Container>
	)
}

export default CartItemCard
