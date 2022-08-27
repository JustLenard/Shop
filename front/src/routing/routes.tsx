import { ProductPage, SingleProductPage } from '../pages'

export const routes = {
    singleProductPage: '/product',
    productPage: '/',
}

export const routeElements = [
    {
        path: routes.singleProductPage,
        exact: true,
        element: <SingleProductPage />,
    },
    {
        path: routes.productPage,
        exact: true,
        element: <ProductPage />,
    },
]
