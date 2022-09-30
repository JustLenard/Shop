import { ProductsPage, SingleProductPage } from '../pages'
import CartPage from '../pages/cartPage/cartPage'
import OrderWasPlaced from '../pages/orderWasPlaced/OrderWasPlaced'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import { categories } from '../types/types'

const getProductsPageLink = (category?: categories) => {
	return category ? `/products:${category}` : '/products:id'
}

const getSingleProductLink = (id?: string) => {
	return id ? `/single-product:${id}` : '/single-product:id'
}

export const routes = {
	singleProductPage: (id?: string) => getSingleProductLink(id),
	productsPage: (category?: categories) => getProductsPageLink(category),
	cartPage: '/cart',
	placeOrder: '/place-order',
}

export const routeElements = [
	{
		path: routes.singleProductPage(),
		exact: true,
		element: <SingleProductPage />,
	},
	{
		path: routes.productsPage(),
		exact: true,
		element: <ProductsPage />,
	},
	{
		path: `${routes.cartPage}`,
		exact: true,
		element: <CartPage />,
	},
	{
		path: `${routes.placeOrder}`,
		exact: true,
		element: <OrderWasPlaced />,
	},

	// Page not found
	{
		path: `*`,
		element: <PageNotFound />,
	},
]
