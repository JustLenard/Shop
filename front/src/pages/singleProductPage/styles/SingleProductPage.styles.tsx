import { size } from '../../../utils/breakpoints'
import styled from 'styled-components/macro'
export { ProductName } from '../../../components/cards/styles/CartItemCard.styles'

export const MainContainer = styled.div`
	@media ${size.md} {
		display: flex;
	}
`

export const ImagesContainer = styled.div`
	@media ${size.lg} {
		display: flex;
		width: 60%;
	}
`

export const SmallImages = styled.div`
	display: flex;
	gap: 3rem;

	img {
		object-fit: cover;
		width: 150px;
		height: 150px;
	}

	@media ${size.md} {
		padding: 1rem;
		flex-direction: column;
	}
`

export const BigImageWrapper = styled.div`
	max-width: 600px;
	max-height: 600px;
	margin: 1rem auto;

	img {
		object-fit: cover;
	}
`

export const ProductInfo = styled.div`
	padding: 1rem;

	border: 2px solid green;

	@media ${size.md} {
		display: flex;
		flex-direction: column;
		width: 40%;
	}
`

export const BrandName = styled.div``

export const Flex = styled.div`
	display: flex;
`

export const Description = styled.p`
	margin-top: 1rem;
`
