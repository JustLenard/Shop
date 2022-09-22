import { ProductsPage, SingleProductPage } from '../pages'
import CartPage from '../pages/cartPage/cartPage'

export const routes = {
	singleProductsPage: '/product',
	productPage: '/',
	cartPage: 'cart',
}

export const routeElements = [
	{
		path: `${routes.singleProductsPage}:id`,
		exact: true,
		element: <SingleProductPage />,
	},
	{
		path: routes.productPage,
		exact: true,
		element: <ProductsPage />,
	},
	{
		path: `${routes.cartPage}`,
		exact: true,
		element: <CartPage />,
	},
]
