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

interface Props {}

const CartDropdown: React.FC<Props> = () => {
	const navigate = useNavigate()
	const cartItems = useSelector((state: RootState) => state.cart)
	const { currencyObj } = useContext(GlobalContext)

	const getPriceObj = (cartItem: ICartItem, selectedCurrency: ICurrencyObj) => {
		return (
			cartItem.product.prices.find((price) => price.currency === selectedCurrency.currency) ||
			cartItem.product.prices[0]
		)
	}

	const smallCartItems: Array<ISmallCartItem> = cartItems.cartItems.map((item) => {
		const priceObj = getPriceObj(item, currencyObj)

		const smallCartItem: ISmallCartItem = {
			id: item.product.id,
			name: item.product.name,
			image: item.product.gallery[0],
			itemsAmount: item.amount,
			totalPrice: currency(priceObj.amount).multiply(item.amount).value,

			currencySymbol: priceObj.symbol,
		}

		return smallCartItem
	})

	console.log('This is cartItem', cartItems)

	const goToCheckout = () => {
		navigate(routes.cartPage)
	}

	console.log('This is smallCartItems', smallCartItems)

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
