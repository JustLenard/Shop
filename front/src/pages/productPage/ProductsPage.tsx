import React, { useState } from 'react'
import { Button } from '../../components/buttons'
import { ProductCard } from '../../components/cards'
import { IProductCard } from '../../components/cards/ProductCard'

import { FlexContainer } from '../../components/layout/styles/Containers'
import { useQuery, gql } from '@apollo/client'
import { useLocation } from 'react-router-dom'
import { getProductsFromCategory, allProducts } from '../../queries'

import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'

// Decide what query to use
const choseQuery = (currentCategory: string) => {
	if (currentCategory === 'All') {
		return allProducts
	}
	return getProductsFromCategory(currentCategory)
}

const ProductsPage: React.FC<{}> = () => {
	const { state } = useLocation()

	const dispatch = useDispatch()

	let currentCategory: string = 'All'
	if (typeof state === 'string') {
		currentCategory = state
	}

	const query = choseQuery(currentCategory)

	const { data, loading, error } = useQuery(query)

	if (loading) {
		return <div>Loading</div>
	}
	if (error) {
		return <div>Error</div>
	}

	let products
	if (currentCategory === 'All') {
		products = data.getAllProducts
	} else {
		products = data.getProductsByCategory
	}

	return (
		<>
			<FlexContainer>
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}
			</FlexContainer>
			{/* <Button text={'Orders'} color={'green'} />
 			<Button text={'White Button'} color={'white'} /> */}
		</>
	)
}
export default ProductsPage
