import styled from 'styled-components'
import { size } from '../../../../utils/breakpoints'

export const Wrapper = styled.div`
	position: relative;

	@media ${size.sm} {
		:hover {
			& > :nth-child(2) {
				display: initial;
				pointer-events: auto;

				transform: translateY(0px);
				opacity: 1;
			}
		}
	}
`

export const CartIconWrapper = styled.div`
	display: flex;
	cursor: pointer;

	svg {
		width: 1.8rem;
	}
`

export const ItemsAmountCartOverlay = styled.div<{ hide: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--green2);

	color: white;

	width: 1.4rem;
	height: 1.4rem;
	border-radius: 50%;

	position: relative;
	right: 9px;
	bottom: 5px;

	transition: all 150ms ease-in;

	opacity: ${({ hide }) => (hide ? 0 : 1)};
`

export const Dropdown = styled.div`
	transform: translateY(-10px);

	opacity: 0;
	/* opacity: 1; */
	pointer-events: none;
	transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

	position: absolute;
	right: 0rem;
	right: none;
	z-index: 20;
	/* top: calc(100% + 1rem); */

	width: 20rem;
	background-color: var(--white);
	border-radius: 0.2rem;
	box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.4);
`

export const TitleCell = styled.h4`
	margin: 0 auto;
	border-bottom: 1.5px solid var(--grayBorder);
	text-align: center;
	padding: 0.5rem 0;
`

export const TotalCell = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 0.5rem 0.2rem;
	border-bottom: 1.5px solid var(--grayBorder);

	color: var(--mutedText);
`

export const BoldText = styled.div`
	font-weight: bold;
`

export const EmptyCart = styled.div`
	text-align: center;
	padding: 1rem 0;
	color: var(--mutedText);
	border-bottom: 1.5px solid var(--grayBorder);
`

export const ButtonsCell = styled.div`
	height: fill;
	height: 100;
	height: auto;

	padding: 0.5rem 0.2rem;

	display: flex;
	justify-content: space-around;
	align-items: center;
`
