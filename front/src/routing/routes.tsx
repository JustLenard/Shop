import { ProductsPage, SingleProductPage } from '../pages'
import CartPage from '../pages/cartPage/cartPage'
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
]
