import React, { useState, createContext, useContext } from 'react'
import * as S from './styles/SingleProductPage.styles'
import { Price, Size, Color } from '../../components/productOptions'
import { Button } from '../../components/buttons'
import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Attributes from '../../components/productOptions/Attributes'
import {
	IAttribute,
	IAttributeSet,
	IAttributeWithSelection,
	ICartItem,
	IPrice,
} from '../../types/types'
import { GlobalContext } from '../../components/layout/Layout'
import { getSingleProduct } from '../../queries'
import ImageSection from './ImageSection'

import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'

interface Props {}

const SingleProductPage: React.FC<Props> = () => {
	const location = useLocation()
	const dispatch = useDispatch()

	const cart = useSelector((state: RootState) => state.cart)

	const objectId = location.pathname.split(':')[1]

	const { data, loading, error } = useQuery(getSingleProduct(objectId))
	const { currencyObj } = useContext(GlobalContext)

	if (loading) {
		return <div>Loading</div>
	}
	if (error) {
		return <div>Error</div>
	}

	const product = data.getProduct

	// Make the first product attributes as the defualt selected value
	let selectedAttributes: Array<IAttributeWithSelection> = product.attributes.map(
		(atribSet: IAttributeSet) => {
			return {
				selectedAtrib: atribSet.items[0],
				type: atribSet.type,
			}
		}
	)

	const addAttributes = (attribute: IAttribute, attributeSet: IAttributeSet) => {
		const selectedAtr: IAttributeWithSelection = {
			...attribute,
			type: attributeSet.type,
		}

		selectedAttributes = selectedAttributes.filter(
			(attrib) => attrib.type !== attributeSet.type
		)

		selectedAttributes.push(selectedAtr)
	}

	const correctPrice =
		product.prices.find((priceObj: IPrice) => priceObj.currency === currencyObj.currency) ||
		product.prices[0]

	const addItemToCart = (item: ICartItem) => {
		const cartItem: ICartItem = {
			product: product,
			amount: 1,
			selectedAttributes: selectedAttributes,
		}

		dispatch(addItem(cartItem))
	}

	return (
		<>
			<S.MainContainer>
				<ImageSection gallery={product.gallery} />
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
					<Price symbol={correctPrice.symbol} price={correctPrice.amount.toFixed(2)} />
					<Button handleClick={addItemToCart} text={'add to cart'} color={'green'} />
					<S.Description>{product.description}</S.Description>
				</S.ProductInfo>
			</S.MainContainer>
		</>
	)
}

export default SingleProductPage
