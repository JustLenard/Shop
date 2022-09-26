import React from 'react'
import { useSelector } from 'react-redux'
import CartItemCard from '../../components/cards/CartItemCard'
import { RootState } from '../../store/store'

interface Props {}

const CartPage: React.FC<Props> = () => {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems)

	console.log('This is cartItems', cartItems)
	return (
		<>
			{cartItems.map((item) => {
				return <CartItemCard {...item} key={item.id} />
			})}
		</>
	)
}

export default CartPage
