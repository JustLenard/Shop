import styled from 'styled-components'
import { size } from '../../../utils/breakpoints'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 0.5rem 0;

	border-bottom: 1px solid var(--grayBorder);
	border-top: 1px solid var(--grayBorder);

	@media ${size.sm} {
		flex-direction: row;
	}
`

export const Content = styled.div`
	flex-grow: 0.8;
`

export const ProductName = styled.h2`
	font-family: 'Raleway', sans-serif;
	font-size: 30px;
	font-weight: 400;
	line-height: 27px;

	padding-bottom: 1rem;
`

export const BrandName = styled.div``

export const Price = styled.div``

export const PlusMinusContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	@media ${size.sm} {
		flex-direction: column;
	}
`

export const PlusMinus = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	width: 30px;
	height: 30px;
	border: 1px solid black;
`

export const ChevronWrapper = styled.div`
	position: absolute;
	display: flex;
	gap: 2rem;

	z-index: 2;
	bottom: 30px;

	button {
		display: flex;
		justify-content: center;
		align-items: center;

		background: none;
		border: none;
		cursor: pointer;
		background: #3a3939;
		padding: 0.2rem;
		transition: transform 150ms ease-in;

		:hover {
			transform: scale(1.2);
		}
	}

	svg {
		width: 25px;
		height: 25px;
		fill: white;
	}
`

export const ImageWrapper = styled.div`
	max-height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	img {
		object-fit: contain;
	}

	@media ${size.sm} {
		width: 400px;
	}
`
