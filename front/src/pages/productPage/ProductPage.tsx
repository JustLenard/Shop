import React from "react";
import { ProductCard } from "../../components/cards";
import {
  MainContainer,
  FlexContainer,
} from "../../components/layout/containers";

interface Props {}

const ProductPage: React.FC<Props> = () => {
  const products = {
    title: "Product Title",
    price: 100,
    currency: "USD",
  };

  return (
    <MainContainer>
      <FlexContainer>
        <ProductCard {...products} />
        <ProductCard {...products} />
        <ProductCard {...products} />
        <ProductCard {...products} />
      </FlexContainer>
    </MainContainer>
  );
};

export default ProductPage;
