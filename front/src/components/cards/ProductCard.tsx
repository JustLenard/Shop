import React from 'react'
import styled from 'styled-components'

const CardBody = styled.div`
	width: 300px;
	height: 200px;
	background-color: green;
`

interface Props {}

const ProductCard: React.FC<Props> = () => {
	return (
		<CardBody>
			<div>image</div>
			<div>Body</div>
		</CardBody>
	)
}

export default ProductCard
