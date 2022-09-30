import currency from 'currency.js'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/buttons'
import CartItemCard from '../../components/cards/CartItemCard'
import { GlobalContext } from '../../components/layout/Layout'
import { routes } from '../../routing/routes'
import { clearCart } from '../../store/cartSlice'
import { RootState } from '../../store/store'
import { getAmountOfItemsInCart } from '../../utils/cart'
import {
	getTotalTaxAmount,
	getTotalPriceOfCart,
	getTotalCartPriceWithTax,
} from '../../utils/prices'
import * as S from './CartPage.styles'

interface Props {}

const CartPage: React.FC<Props> = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const tax = 21
	const cartItems = useSelector((state: RootState) => state.cart.cartItems)

	const { currencyObj } = useContext(GlobalContext)

	const totalCartPrice = getTotalPriceOfCart(cartItems, currencyObj)
	const totalTax = getTotalTaxAmount(totalCartPrice, tax, currencyObj)
	const totalWithTax = getTotalCartPriceWithTax(totalCartPrice, tax, currencyObj)

	const amountOfItemsInCart = getAmountOfItemsInCart(cartItems)

	const makeOrder = () => {
		dispatch(clearCart())
		navigate(routes.placeOrder)
	}

	if (cartItems.length === 0) {
		return (
			<>
				<h1>Your cart is Empty</h1>
			</>
		)
	}

	return (
		<>
			{cartItems.map((item) => {
				return <CartItemCard {...item} key={item.id} />
			})}

			<S.Container>
				<S.Column>
					<S.Text>Tax: </S.Text>
					<S.Text>Quantity: </S.Text>
					<S.Text>Total: </S.Text>
				</S.Column>
				<S.Column>
					<S.Number>{totalTax}</S.Number>
					<S.Number>{amountOfItemsInCart}</S.Number>
					<S.Number>{totalWithTax}</S.Number>
				</S.Column>
			</S.Container>

			<Button handleClick={makeOrder} type="order" text="Order" />
		</>
	)
}

export default CartPage
