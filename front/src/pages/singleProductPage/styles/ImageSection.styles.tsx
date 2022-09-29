import { size } from '../../../utils/breakpoints'
import styled from 'styled-components'
export { ProductName } from '../../../components/cards/styles/CartItemCard.styles'

export const ImagesContainer = styled.div`
	overflow: hidden;

	border: 2px solid red;
	/* 
	@media ${size.md} {
		display: flex;
		flex-direction: column;
		align-items: center;
	} */
`

export const Scroll = styled.div`
	display: flex;

	background-color: green;

	justify-content: center;

	border: 2px solid blue;
`

export const SvgWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	background: transparent;

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

	border: 2px solid green;
`

export const SmallImage = styled.img<{ highlight: boolean }>`
	transition: all 150ms ease-in;

	border: ${({ highlight }) => (highlight ? '2px solid red' : '2px solid white')};
	border-radius: 5px;
	box-shadow: ${({ highlight }) =>
		highlight ? '-1px -1px 11px 2px rgba(255,0,0,0.75);' : 'none'};

	cursor: pointer;
	object-fit: contain;
	width: 150px;
	height: 150px;
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
