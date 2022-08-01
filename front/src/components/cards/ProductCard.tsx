import React from 'react'
import styled from 'styled-components'
// import { animeGirl } from '../../assets/images/animeGirl.jpeg'
// import animeGirl from '../../assets/images/animeGirl.jpeg'
import animeGirl from './animeGirl.jpeg'

const CardBody = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 80%;
  /* flex: 1  */
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`

interface Props {
  image?: string
  title?: string
  currency?: string
  price?: number
}

const ProductCard: React.FC<Props> = ({
  currency,
  image,
  title,
  price,
}: Props) => {
  return (
    <CardBody>
      <ImageWrapper>
        <img src={animeGirl}></img>
      </ImageWrapper>
      <div>{title}</div>
      <div>
        {currency}
        {price}
      </div>
    </CardBody>
  )
}

export default ProductCard
