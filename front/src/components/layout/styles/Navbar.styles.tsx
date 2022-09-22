import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem;
	background-color: gray;
	height: 5rem;
`

export const Section = styled.div`
	display: flex;
	gap: 1rem;
`

export const LinkWrapper = styled.div`
	border: 1px solid red;

	a {
		text-decoration: none;
		color: black;
	}
`

export const CartWrapper = styled.div`
	display: flex;
	cursor: pointer;

	svg {
		width: 1.8rem;
	}
`

export const ItemsAmount = styled.div`
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
