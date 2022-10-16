import styled from 'styled-components'
import { Cell } from '../../navbar/Navbar.styles'
import { size } from '../../../utils/breakpoints'

export const HamburgerWrapper = styled(Cell)`
	@media ${size.sm} {
		display: none;
	}
`

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
`
