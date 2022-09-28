import React, { useState } from 'react'
import { Button } from '../../components/buttons'
import { ProductCard } from '../../components/cards'

import { FlexContainer } from '../../components/layout/styles/Containers'
import { useQuery, gql } from '@apollo/client'
import { useLocation } from 'react-router-dom'
import { getProductsFromCategory, allProducts } from '../../queries'

import { IProductCard } from '../../types/types'

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
		<FlexContainer>
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}{' '}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}{' '}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}{' '}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}{' '}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
			{products.map((item: IProductCard) => {
				return <ProductCard {...item} key={item.id} />
			})}
		</FlexContainer>
	)
}
export default ProductsPage
