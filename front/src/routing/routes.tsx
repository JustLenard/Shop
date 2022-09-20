import { ProductsPage, SingleProductPage } from '../pages'

export const routes = {
    singleProductsPage: '/product',
    productPage: '/',
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
]
