import React from 'react'
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

const womenClothes = gql`
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

const ProductPage: React.FC<{}> = () => {
    const { data, loading, error } = useQuery(womenClothes)

    const { state } = useLocation()
    console.log('This is state', state)

    const currentCategory = state ? state : 'Women'

    if (loading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>Error</div>
    }

    const filteredProducts = data.getAllProducts.filter(
        (product: IProductCard) => product.category === currentCategory
    )

    console.log('This is filteredProducts', filteredProducts)

    return (
        <>
            <FlexContainer>
                {filteredProducts.map((item: IProductCard) => {
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
export default ProductPage
