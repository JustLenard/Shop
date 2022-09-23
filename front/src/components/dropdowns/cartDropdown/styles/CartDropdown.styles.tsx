import styled from 'styled-components/macro'

export const Wrapper = styled.div`
	position: relative;

	border: 2px solid green;

	:hover {
		& > :nth-child(2) {
			display: initial;
			pointer-events: auto;

			transform: translateY(0px);
			opacity: 1;
		}
	}
`

export const CartWrapper = styled.div`
	display: flex;
	cursor: pointer;

	svg {
		width: 1.8rem;
	}
`

export const ItemsAmountCartOverlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;

	position: relative;
	right: 9px;
	bottom: 5px;
`

export const Dropdown = styled.div`
	transform: translateY(-10px);

	opacity: 0;
	opacity: 1;
	/* pointer-events: none; */
	transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

	position: absolute;
	right: 0rem;
	right: none;
	z-index: 20;
	/* top: calc(100% + 1rem); */

	width: 20rem;
	background-color: var(--white);
	border-radius: 0.5rem;
	box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.4);
`

export const TitleCell = styled.h5`
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

export const MutedText = styled.div``

export const ButtonsCell = styled.div`
	height: fill;
	height: 100;
	height: auto;

	padding: 0.5rem 0.2rem;

	display: flex;
	justify-content: space-around;
	align-items: center;
`
