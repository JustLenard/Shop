import React from 'react'
import { Button } from '../../components/buttons'
import { ProductCard } from '../../components/cards'
import CartItemCard from '../../components/cards/CartItemCard'
import { FlexContainer } from '../../components/layout/styles/Containers'

interface Props {}

const ProductPage: React.FC<Props> = () => {
    const products = {
        title: 'Product Title',
        price: 100,
        currency: 'USD',
        iamge: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/613CLq8LhBL._AC_SY550._SX._UX._SY._UY_.jpg',
    }

    let imageLink =
        'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/613CLq8LhBL._AC_SY550._SX._UX._SY._UY_.jpg'

    let product = {
        name: 'Product Name',
        price: 100,
    }

    return (
        <>
            <FlexContainer>
                <ProductCard {...products} />
                <ProductCard {...products} />
                <ProductCard {...products} />
                <ProductCard {...products} />
            </FlexContainer>
            <CartItemCard {...product} />
            <Button text={'Orders'} color={'green'} />
            <Button text={'White Button'} color={'white'} />
            <img src={imageLink} alt="dress"></img>
        </>
    )
}
export default ProductPage
