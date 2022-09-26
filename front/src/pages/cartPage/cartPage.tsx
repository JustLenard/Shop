import currency from 'currency.js'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import CartItemCard from '../../components/cards/CartItemCard'
import { GlobalContext } from '../../components/layout/Layout'
import { RootState } from '../../store/store'
import { getPriceWithTax, getTotalPriceOfCart } from '../../utils/prices'

interface Props {}

const CartPage: React.FC<Props> = () => {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems)

	console.log('This is cartItems', cartItems)
	const { currencyObj } = useContext(GlobalContext)

	const totalCartPrice = getTotalPriceOfCart(cartItems, currencyObj)
	const totalCartPriceWithTax = getPriceWithTax(totalCartPrice, 21, currencyObj)
	// console.log('This is totalCartPriceWithTax', totalCartPriceWithTax)
	return (
		<>
			{cartItems.map((item) => {
				return <CartItemCard {...item} key={item.id} />
			})}
			<div>{totalCartPrice}</div>
			<div>{totalCartPriceWithTax}</div>
		</>
	)
}

export default CartPage
