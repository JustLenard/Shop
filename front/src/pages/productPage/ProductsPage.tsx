import React, { useState } from 'react'
import { Button } from '../../components/buttons'
import { ProductCard } from '../../components/cards'
import { IProductCard } from '../../components/cards/ProductCard'

import CartItemCard from '../../components/cards/CartItemCard'
import { FlexContainer } from '../../components/layout/styles/Containers'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    useQuery,
    gql,
} from '@apollo/client'
import { useLocation } from 'react-router-dom'

const allProducts = gql`
    query {
        getAllProducts {
            id
            name
            category
            prices {
                currency
                amount
                symbol
            }
            gallery
        }
    }
`

const ProductsPage: React.FC<{}> = () => {
    const [products, setProdcuts] = useState<Array<IProductCard>>([])
    const { state } = useLocation()

    const currentCategory = state ? state : 'All'

    const { data, loading, error } = useQuery(allProducts)

    console.log('This is data', data)

    if (loading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>Error</div>
    }

    return (
        <>
            <FlexContainer>
                {data.getAllProducts.map((item: IProductCard) => {
                    return <ProductCard {...item} key={item.id} />
                })}
            </FlexContainer>
            {/* <CartItemCard {...product} /> */}
            <Button text={'Orders'} color={'green'} />
            <Button text={'White Button'} color={'white'} />
            {/* <img src={imageLink} alt="dress"></img> */}
        </>
    )
}
export default ProductsPage
