import React from 'react'
import styled from 'styled-components'
// import { animeGirl } from '../../assets/images/animeGirl.jpeg'
// import animeGirl from '../../assets/images/animeGirl.jpeg'

const CardBody = styled.div`
  width: 300px;
  height: 200px;
  background-color: green;
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
      <div>
        <img src="animeGirl.jpeg"></img>
      </div>
      <div>{title}</div>
      <div>
        {currency}
        {price}
      </div>
    </CardBody>
  )
}

export default ProductCard
