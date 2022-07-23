import { ProductPage, Home } from '../pages'

export const routes = {
	home: '/home',
	productPage: '/',
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
