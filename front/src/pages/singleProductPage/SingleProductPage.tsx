import React, { useContext, useState } from 'react'
import * as S from './styles/SingleProductPage.styles'
import { Price } from '../../components/productOptions'
import { ButtonWithAnimation } from '../../components/buttons'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import AttributesProduct from '../../components/productOptions/singlePageAttributes/AttributesProduct'
import {
	IAttribute,
	IAttributeSet,
	IAttributeWithSelection,
	ICartItem,
	IProduct,
} from '../../types/types'
import { GlobalContext } from '../../components/layout/Layout'
import { getSingleProduct } from '../../queries'
import ImageSection from './ImageSection'

import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import { createUniqueCartItemId } from '../../utils/cart'
import { getCorrectPrice } from '../../utils/prices'
import { Spinner } from '../../components/spinner'

interface Props {}

const SingleProductPage: React.FC<Props> = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const amountArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const [attributes, setAttriubutes] = useState<IAttributeWithSelection[]>([])
	const [amount, setAmount] = useState(amountArr[0])

	const objectId = location.pathname.split(':')[1]

	const { data, loading, error } = useQuery(getSingleProduct(objectId))
	const { currencyObj } = useContext(GlobalContext)

	if (loading) {
		return <Spinner />
	}
	if (error) {
		return <div>Error</div>
	}

	const product: IProduct = data.getProduct

	if (attributes.length === 0) {
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
		setAttriubutes(defaultAttributes)
	}

	const addAttributes = (attribute: IAttribute, attributeSet: IAttributeSet) => {
		const selectedAtr: IAttributeWithSelection = {
			...attribute,
			type: attributeSet.type,
		}

		const filteredArr = attributes.filter((attrib) => attrib.type !== attributeSet.type)

		setAttriubutes([...filteredArr, selectedAtr])
	}

	const correctPrice = getCorrectPrice(product.prices, currencyObj)

	const addItemToCart = () => {
		const cartItem: ICartItem = {
			id: createUniqueCartItemId(attributes, product),
			product: product,
			amount: amount,
			selectedAttributes: attributes,
		}

		dispatch(addItem(cartItem))
	}

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setAmount(parseInt(e.target.value))
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

					<S.FlexContainer>
						<Price price={correctPrice} />
						<S.AmountWrapper>
							<span>Amount: </span>
							<select value={amount} onChange={(e) => handleSelect(e)}>
								{amountArr.map((numb) => {
									return (
										<option value={numb} key={numb}>
											{numb}
										</option>
									)
								})}
							</select>
						</S.AmountWrapper>
					</S.FlexContainer>
					{/* <Button handleClick={addItemToCart} text={'add to cart'} type={'green'} /> */}
					<ButtonWithAnimation handleClick={addItemToCart} />

					<S.Description>{product.description}</S.Description>
				</S.ProductInfo>
			</S.MainContainer>
		</>
	)
}

export default SingleProductPage
