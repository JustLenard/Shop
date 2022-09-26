import styled from 'styled-components'

export const SmallCartItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0.5rem 0.2rem;
	position: relative;

	gap: 0.5rem;

	border-bottom: 1.5px solid var(--grayBorder);

	:hover {
		svg {
			opacity: 1;
		}
	}
`

export const XButton = styled.button`
	width: 25px;
	height: 25px;
	position: absolute;
	right: 0;
	top: 0;

	border-radius: 0;
	border: none;
	background-color: inherit;
	box-shadow: none;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	svg {
		width: inherit;
		height: inherit;
		opacity: 0;

		transition: opacity 150ms ease-in-out, fill 150ms ease-in-out;
	}

	:hover {
		svg {
			fill: var(--hoverBlue);
		}
	}
`

export const ImageWrapper = styled.a`
	img {
		height: 100%;
		width: 70px;
	}
`

export const AttributesAndName = styled.a`
	display: flex;
	flex-direction: column;
	color: var(--mutedText);
`

export const Attributes = styled.div`
	display: flex;
	gap: 0.5rem;
	/* justify-content: space-between; */
`

export const Amount = styled.div``

export const Price = styled.div``
