import React, { useContext, useState } from 'react'
import * as S from './styles/SingleProductPage.styles'
import { Price } from '../../components/productOptions'
import { Button } from '../../components/buttons'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import AttributesProduct from '../../components/productOptions/singlePageAttributes/AttributesProduct'
import {
	IAttribute,
	IAttributeSet,
	IAttributeWithSelection,
	ICartItem,
	IPrice,
	IProduct,
} from '../../types/types'
import { GlobalContext } from '../../components/layout/Layout'
import { getSingleProduct } from '../../queries'
import ImageSection from './ImageSection'

import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import { createUniqueCartItemId } from '../../utils/cart'
import { getCorrectPrice, getPriceObj } from '../../utils/prices'

interface Props {}

const SingleProductPage: React.FC<Props> = () => {
	const location = useLocation()
	const dispatch = useDispatch()

	const [attributes, setAttriubutes] = useState()

	const objectId = location.pathname.split(':')[1]

	const { data, loading, error } = useQuery(getSingleProduct(objectId))
	const { currencyObj } = useContext(GlobalContext)

	if (loading) {
		return <div>Loading</div>
	}
	if (error) {
		return <div>Error</div>
	}

	const product: IProduct = data.getProduct

	// Make the first product attributes as the defualt selected value
	let defaultAttributes: Array<IAttributeWithSelection> = product.attributes.map(
		(atribSet: IAttributeSet) => {
			return {
				displayValue: atribSet.items[0].displayValue,
				value: atribSet.items[0].value,
				type: atribSet.type,
			}
		}
	)

	const addAttributes = (attribute: IAttribute, attributeSet: IAttributeSet) => {
		const selectedAtr: IAttributeWithSelection = {
			...attribute,
			type: attributeSet.type,
		}

		defaultAttributes = defaultAttributes.filter((attrib) => attrib.type !== attributeSet.type)

		defaultAttributes.push(selectedAtr)
	}

	const correctPrice = getCorrectPrice(product.prices, currencyObj)

	const addItemToCart = () => {
		const cartItem: ICartItem = {
			id: createUniqueCartItemId(defaultAttributes, product),
			product: product,
			amount: 1,
			selectedAttributes: defaultAttributes,
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
							<AttributesProduct
								attributeSet={attribute}
								key={attribute.type}
								addAttributes={addAttributes}
							/>
						)
					})}

					<Price price={correctPrice} />
					<Button handleClick={addItemToCart} text={'add to cart'} color={'green'} />

					<S.Description>{product.description}</S.Description>
				</S.ProductInfo>
			</S.MainContainer>
		</>
	)
}

export default SingleProductPage
