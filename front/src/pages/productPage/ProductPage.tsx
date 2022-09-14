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

const detailedProduct = gql`
    query {
        getAllProducts {
            id
            name
            description
            category
            prices {
                currency
                amount
            }
            brand
            attributes {
                name
                type
                items {
                    displayValue
                    value
                }
            }
            gallery
        }
    }
`

const womenClothes = gql`
    query {
        getAllProducts {
            id
            name
            category
            prices {
                currency
                amount
            }
            gallery
        }
    }
`

const ProductPage: React.FC<{}> = () => {
    const { data, loading, error } = useQuery(womenClothes)

    const images = [
        'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61EdREF13eL._AC_UY550_.jpg',
        'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61MOQzG3Q5L._AC_UY550_.jpg',
        'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61ZlneaN66L._AC_SY550._SX._UX._SY._UY_.jpg',
        'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81mRDeQuC1L._AC_SY550._SX._UX._SY._UY_.jpg',
    ]

    const products = {
        title: 'Product Title f',
        price: 100,
        currency: 'USD',
        image: images,
    }

    let product = {
        name: 'Product Name',
        price: 100,
    }

    if (loading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>Error</div>
    }
    // console.log('This is data', data.getAllProducts)

    return (
        <>
            <FlexContainer>
                {data.getAllProducts.map((item: IProductCard) => {
                    console.log('This is item', item)
                    return <ProductCard {...item} key={item.id} />
                })}
            </FlexContainer>
            <CartItemCard {...product} />
            <Button text={'Orders'} color={'green'} />
            <Button text={'White Button'} color={'white'} />
            {/* <img src={imageLink} alt="dress"></img> */}
        </>
    )
}
export default ProductPage
