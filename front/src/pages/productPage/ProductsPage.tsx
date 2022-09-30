import React, { useState } from 'react'
import { Button } from '../../components/buttons'
import { ProductCard } from '../../components/cards'

import * as S from './ProductsPage.styles'
import { useQuery, gql } from '@apollo/client'
import { useLocation } from 'react-router-dom'
import { getProductsFromCategory, allProducts } from '../../queries'

import { IProductCard } from '../../types/types'
import { Spinner } from '../../components/spinner'

// Decide what query to use
const choseQuery = (currentCategory: string) => {
	if (currentCategory === 'All') {
		return allProducts
	}
	return getProductsFromCategory(currentCategory)
}

const ProductsPage: React.FC = () => {
	const location = useLocation()

	const currentCategory = location.pathname.split(':')[1]

	const query = choseQuery(currentCategory)

	const { data, loading, error } = useQuery(query)

	if (loading) {
		return <Spinner />
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
			<S.Title> Current Category: {currentCategory}</S.Title>
			<S.FlexContainer>
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}{' '}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}{' '}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}{' '}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}{' '}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}{' '}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}{' '}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}{' '}
				{products.map((item: IProductCard) => {
					return <ProductCard {...item} key={item.id} />
				})}
			</S.FlexContainer>
		</>
	)
}
export default ProductsPage
