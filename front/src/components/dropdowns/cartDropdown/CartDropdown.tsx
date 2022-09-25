import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartSVG } from '../../../assets/icons'
import { routes } from '../../../routing/routes'
import { RootState } from '../../../store/store'
import { Button } from '../../buttons'
import SmallCartItem from './SmallCartItem'
import currency from 'currency.js'

import * as S from './styles/CartDropdown.styles'
import { ICartItem, ICurrencyObj, IPrice, ISmallCartItem } from '../../../types/types'
import { GlobalContext } from '../../layout/Layout'
import { getCartTotalPrice, getPriceObj } from '../../../utils/prices'

interface Props {}

const CartDropdown: React.FC<Props> = () => {
	const navigate = useNavigate()
	const cartItems = useSelector((state: RootState) => state.cart)
	const { currencyObj } = useContext(GlobalContext)

	const smallCartItems: Array<ISmallCartItem> = cartItems.cartItems.map((item) => {
		const priceObj = getPriceObj(item, currencyObj)

		const smallCartItem: ISmallCartItem = {
			id: item.product.id,
			name: item.product.name,
			image: item.product.gallery[0],
			itemsAmount: item.amount,
			totalPrice: currency(priceObj.amount, { symbol: currencyObj.symbol })
				.multiply(item.amount)
				.format(),
		}

		return smallCartItem
	})

	console.log('This is cartItem', cartItems)

	const goToCheckout = () => {
		navigate(routes.cartPage)
	}

	const cartTotal = getCartTotalPrice(cartItems.cartItems, currencyObj)

	return (
		<S.Wrapper>
			<S.CartWrapper>
				<CartSVG />
				<S.ItemsAmountCartOverlay>{cartItems.totalItemsAmount}</S.ItemsAmountCartOverlay>
			</S.CartWrapper>
			<S.Dropdown>
				<S.TitleCell>Cart Items</S.TitleCell>
				{smallCartItems.map((item, i) => {
					return <SmallCartItem key={i} {...item} />
				})}

				{/* <SmallCartItem /> */}
				<S.TotalCell>
					<S.BoldText>TOTAL:</S.BoldText>
					{cartItems.totalItemsAmount === 1 ? (
						<S.MutedText>{`${cartItems.totalItemsAmount} product`}</S.MutedText>
					) : (
						<S.MutedText>{`${cartItems.totalItemsAmount} products`}</S.MutedText>
					)}
					<S.BoldText>{cartTotal}</S.BoldText>
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
