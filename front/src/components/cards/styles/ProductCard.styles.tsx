import styled from 'styled-components'

export const MiniCart = styled.div`
	position: absolute;
	background-color: var(--green2);
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;

	right: 10px;
	bottom: 20px;

	opacity: 0;

	transition: opacity 150ms ease-in-out;

	svg {
		height: 25px;
		width: 25px;
		fill: white;
	}
`

export const CardBody = styled.div`
	height: 400px;
	background-color: var(--productCardItem);
	padding: 1rem;
	display: inline-flex;
	flex-direction: column;
	cursor: pointer;

	transition: transform 150ms ease-in-out;

	border-radius: 20px;

	box-shadow: -10px 13px 19px -9px rgba(107, 68, 68, 0.75);

	:hover {
		transform: scale(1.05);

		${MiniCart} {
			opacity: 1;
		}
	}
`

export const ImageWrapper = styled.div`
	width: 100%;
	height: 80%;
	position: relative;

	img {
		width: 100%;
		height: 100%;

		object-fit: contain;
	}
`

export const Title = styled.h4`
	margin-top: 1rem;
`

export const Brand = styled.div`
	color: var(--mutedText);
`

export const Price = styled.div`
	margin-top: 0.7rem;
	font-size: 1rem;
`
