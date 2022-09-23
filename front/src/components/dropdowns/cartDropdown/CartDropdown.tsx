import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartSVG } from '../../../assets/icons'
import { routes } from '../../../routing/routes'
import { RootState } from '../../../store/store'
import { Button } from '../../buttons'
import SmallCartItem from './SmallCartItem'

import * as S from './styles/CartDropdown.styles'

interface Props {}

const CartDropdown: React.FC<Props> = () => {
	const navigate = useNavigate()
	const cartItem = useSelector((state: RootState) => state.cart)

	const goToCheckout = () => {
		navigate(routes.cartPage)
	}

	return (
		<S.Wrapper>
			<S.CartWrapper>
				<CartSVG />
				<S.ItemsAmountCartOverlay>{cartItem.totalItemsAmount}</S.ItemsAmountCartOverlay>
			</S.CartWrapper>
			<S.Dropdown>
				<S.TitleCell>Cart Items</S.TitleCell>
				<SmallCartItem />
				<SmallCartItem />
				<S.TotalCell>
					<S.BoldText>TOTAL:</S.BoldText>
					<S.MutedText>{`2 produse`}</S.MutedText>
					<S.BoldText>{`x amoun`}</S.BoldText>
				</S.TotalCell>

				<S.ButtonsCell>
					<Button handleClick={goToCheckout} text={'Checkout'} color={'green'} />
					<Button text={'Clear Cart'} color={'red'} />
				</S.ButtonsCell>

				{/* <S.DropdownCell> Items</S.DropdownCell>
				<S.DropdownCell> Items</S.DropdownCell> */}
			</S.Dropdown>
		</S.Wrapper>
	)
}

export default CartDropdown
