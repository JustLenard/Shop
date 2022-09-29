import { size } from '../../../utils/breakpoints'
import styled from 'styled-components'
export { ProductName } from '../../../components/cards/styles/CartItemCard.styles'

export const ImagesContainer = styled.div`
	overflow: hidden;
`

export const Scroll = styled.div`
	display: flex;
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

	gap: 1rem;

	overflow-x: hidden;
	scroll-behavior: smooth;

	img {
		cursor: pointer;
		object-fit: contain;
		width: 150px;
		height: 150px;
	}
`

export const BigImageWrapper = styled.div`
	max-width: 600px;
	max-height: 600px;

	margin: 1rem auto;

	img {
		width: 100%;
		height: 100%;
		max-height: inherit;
		object-fit: contain;
	}
`
