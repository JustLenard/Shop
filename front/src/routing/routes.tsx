import { ProductsPage, SingleProductPage } from '../pages'
import CartPage from '../pages/cartPage/cartPage'

export const routes = {
	singleProductsPage: '/product',
	productsPage: '/',
	cartPage: 'cart',
}

export const routeElements = [
	{
		path: `${routes.singleProductsPage}:id`,
		exact: true,
		element: <SingleProductPage />,
	},
	{
		path: routes.productsPage,
		exact: true,
		element: <ProductsPage />,
	},
	{
		path: `${routes.cartPage}`,
		exact: true,
		element: <CartPage />,
	},
]
