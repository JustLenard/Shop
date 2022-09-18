import React, { useState, createContext, useContext } from 'react'
import * as S from './SingleProductPage.styles'
import { Price, Size, Color } from '../../components/productOptions'
import { Button } from '../../components/buttons'
import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Attributes from '../../components/productOptions/Attributes'
import { IAttribute, IAttributeSet, IPrice } from '../../types/types'
import { GlobalContext } from '../../components/layout/Layout'

const getSingleProduct = (id: string) => {
    return gql`
    query {
        getProduct (id:"${id}"){
            id
            name
            description
            category
            prices {
                currency
                amount
                symbol
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
}

interface Props {}

const SingleProductPage: React.FC<Props> = () => {
    const location = useLocation()
    const objectId = location.pathname.split(':')[1]

    const { data, loading, error } = useQuery(getSingleProduct(objectId))
    const [focusedImage, setFocusedImage] = useState('')
    const { currency } = useContext(GlobalContext)

    if (loading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>Error</div>
    }

    const product = data.getProduct

    const handleHover = (imageLink: string) => {
        setFocusedImage(imageLink)
    }

    const selectedAttributes: Array<IAttributeSet> = []

    const addAttributes = (
        attribute: IAttribute,
        attributeSet: IAttributeSet
    ) => {
        const selectedAtr = {
            ...attributeSet,
            selected: attribute,
        }

        selectedAttributes.push(selectedAtr)
    }

    const correctPrice =
        product.prices.find(
            (priceObj: IPrice) => priceObj.currency === currency
        ) || product.prices[0]

    return (
        <>
            <S.MainContainer>
                <S.ImagesContainer>
                    <S.SmallImages>
                        {product.gallery.map((imageLink: string) => {
                            return (
                                <img
                                    src={imageLink}
                                    alt="product"
                                    key={imageLink}
                                    onMouseOver={() => handleHover(imageLink)}
                                />
                            )
                        })}
                    </S.SmallImages>
                    <S.BigImageWrapper>
                        <img
                            src={focusedImage || product.gallery[0]}
                            alt="focused product"
                        />
                    </S.BigImageWrapper>
                </S.ImagesContainer>
                <S.ProductInfo>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.BrandName>{product.brand}</S.BrandName>
                    {product.attributes.map((attribute: IAttributeSet) => {
                        return (
                            <Attributes
                                attributeSet={attribute}
                                key={attribute.type}
                                addAttributes={addAttributes}
                            />
                        )
                    })}
                    <Price
                        symbol={correctPrice.symbol}
                        price={correctPrice.amount.toFixed(2)}
                    />
                    <Button text={'add to cart'} color={'green'} />
                    <S.Description>{product.description}</S.Description>
                </S.ProductInfo>
            </S.MainContainer>
        </>
    )
}

export default SingleProductPage
