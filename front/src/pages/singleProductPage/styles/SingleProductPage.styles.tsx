import { size } from '../../../utils/breakpoints'
import styled from 'styled-components'
export { ProductName } from '../../../components/cards/styles/CartItemCard.styles'

export const MainContainer = styled.div`
	@media ${size.md} {
		display: flex;
	}
`

export const ImagesContainer = styled.div`
	border: 2px solid red;
	/* width: 100%; */

	@media ${size.lg} {
		/* display: flex; */
		width: 60%;
	}
`

export const Scroll = styled.div`
	display: flex;

	width: 100%;
`

export const SvgWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	svg {
		transition: all 150ms ease-in;
		fill: var(--mutedText);
		width: 30px;
		height: 30px;
	}

	:hover {
		svg {
			fill: var(--black);
		}
	}
`

export const SmallImages = styled.div`
	display: flex;

	/* width: 400px; */
	gap: 1rem;

	border: 2px solid red;
	overflow-x: hidden;
	scroll-behavior: smooth;

	img {
		cursor: pointer;
		object-fit: contain;
		width: 150px;
		height: 150px;
	}

	/* @media ${size.md} {
		padding: 1rem;
		flex-direction: column;
	} */
`

export const BigImageWrapper = styled.div`
	max-width: 600px;
	max-height: 600px;

	margin: 1rem auto;

	border: 2px solid green;

	img {
		width: 100%;
		height: 100%;
		max-height: inherit;
		object-fit: contain;
	}
`

export const ProductInfo = styled.div`
	padding: 1rem;

	border: 2px solid green;

	/* @media ${size.md} {
		display: flex;
		flex-direction: column;
		width: 40%;
	} */
`

export const BrandName = styled.div``

export const Flex = styled.div`
	display: flex;
`

export const Description = styled.p`
	margin-top: 1rem;
`
