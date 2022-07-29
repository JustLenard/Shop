import React from 'react'
import { ProductCard } from '../../components/cards'
import { MainContainer } from '../../components/layout/containers'

interface Props {}

const ProductPage: React.FC<Props> = () => {
	return (
		<MainContainer>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</MainContainer>
	)
}

export default ProductPage
