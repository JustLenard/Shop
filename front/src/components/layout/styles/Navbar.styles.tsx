import styled from 'styled-components/macro'

export const NavbarContainer = styled.nav`
	background-color: gray;
`

export const SectionsWrapper = styled.div`
	margin: 0 auto;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem;
	height: 5rem;

	/* max-width: 1600px; */
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
