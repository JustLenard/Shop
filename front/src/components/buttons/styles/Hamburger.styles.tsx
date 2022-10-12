import styled from 'styled-components'
import { size } from '../../../utils/breakpoints'

export const Hamburger = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 30px;
	height: 21px;
	border: none;
	background: none;
	cursor: pointer;

	div {
		display: flex;
		height: 3px;
		width: 100%;
		background: black;
		border-radius: 10px;
	}

	@media ${size.sm} {
		display: none;
	}
`
