import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartSVG } from '../../../assets/icons'
import { routes } from '../../../routing/routes'
import { RootState } from '../../../store/store'
import { Button } from '../../buttons'
import SmallCartItem from './SmallCartItem'
import currency from 'currency.js'

import * as S from './styles/CartDropdown.styles'
import {
	IAttributeWithSelection,
	ICartItem,
	ICurrencyObj,
	IPrice,
	ISmallCartItem,
} from '../../../types/types'
import { GlobalContext } from '../../layout/Layout'
import { getTotalPriceOfCart, getPriceObj } from '../../../utils/prices'
import { getAmountOfItemsInCart } from '../../../utils/cart'
import { clearCart } from '../../../store/cartSlice'

interface Props {}

const CartDropdown: React.FC<Props> = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const cartItemObj = useSelector((state: RootState) => state.cart)
	const { currencyObj } = useContext(GlobalContext)

	const smallCartItems: Array<ISmallCartItem> = cartItemObj.cartItems.map((item) => {
		const priceObj = getPriceObj(item, currencyObj)

		const smallCartItem: ISmallCartItem = {
			id: item.id,
			name: item.product.name,
			image: item.product.gallery[0],
			itemsAmount: item.amount,
			totalPrice: currency(priceObj.amount, { symbol: currencyObj.symbol })
				.multiply(item.amount)
				.format(),
			selectedAttributes: item.selectedAttributes,
		}

		return smallCartItem
	})

	console.log('This is cartItem', cartItemObj)

	const goToCheckout = () => {
		navigate(routes.cartPage)
	}

	const dispatchClearCart = () => {
		dispatch(clearCart())
	}

	const itemsInCart = getAmountOfItemsInCart(cartItemObj.cartItems)

	const cartTotalPrice = getTotalPriceOfCart(cartItemObj.cartItems, currencyObj)

	return (
		<S.Wrapper>
			<S.CartIconWrapper>
				<CartSVG />
				<S.ItemsAmountCartOverlay>{itemsInCart}</S.ItemsAmountCartOverlay>
			</S.CartIconWrapper>
			<S.Dropdown>
				<S.TitleCell>Items in Cart</S.TitleCell>
				{smallCartItems.map((item, i) => {
					return <SmallCartItem key={i} {...item} />
				})}

				<S.TotalCell>
					<S.BoldText>TOTAL:</S.BoldText>
					{itemsInCart === 1 ? (
						<S.MutedText>{`${itemsInCart} product`}</S.MutedText>
					) : (
						<S.MutedText>{`${itemsInCart} products`}</S.MutedText>
					)}
					<S.BoldText>{cartTotalPrice}</S.BoldText>
				</S.TotalCell>

				<S.ButtonsCell>
					<Button handleClick={goToCheckout} text={'Checkout'} color={'green'} />
					<Button handleClick={dispatchClearCart} text={'Clear Cart'} color={'red'} />
				</S.ButtonsCell>
			</S.Dropdown>
		</S.Wrapper>
	)
}

export default CartDropdown
