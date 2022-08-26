import React from 'react'
import { Button } from '../../components/buttons'
import { ProductCard } from '../../components/cards'
import CartItemCard from '../../components/cards/CartItemCard'
import {
    MainContainer,
    FlexContainer,
} from '../../components/layout/containers'

interface Props {}

const ProductPage: React.FC<Props> = () => {
    const products = {
        title: 'Product Title',
        price: 100,
        currency: 'USD',
    }

    let product = {
        name: 'Product Name',
        price: 100,
    }

    return (
        <MainContainer>
            <FlexContainer>
                <ProductCard {...products} />
                <ProductCard {...products} />
                <ProductCard {...products} />
                <ProductCard {...products} />
            </FlexContainer>
            <CartItemCard {...product} />
            <Button text={'Orders'} color={'green'} />
            <Button text={'White Button'} color={'white'} />
        </MainContainer>
    )
}
export default ProductPage
