import { ProductPage, Home } from '../pages'

export const routes = {
	home: '/',
	productPage: '/product',
}

export const routeElements = [
	{
		path: routes.home,
		exact: true,
		element: <Home />,
	},
	{
		path: routes.productPage,
		exact: true,
		element: <ProductPage />,
	},
]
