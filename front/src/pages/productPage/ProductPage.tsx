import React from 'react'
import { ProductCard } from '../../components/cards'
import {
  MainContainer,
  FlexContainer,
} from '../../components/layout/containers'

interface Props {}

const ProductPage: React.FC<Props> = () => {
  return (
    <MainContainer>
      <FlexContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </FlexContainer>
    </MainContainer>
  )
}

export default ProductPage
