import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	background-color: gray;
`

export const SectionsWrapper = styled.div`
	margin: 0 auto;
	width: 90%;
	display: flex;
	justify-content: space-between;

	height: 4rem;

	/* border: 1px solid black; */
`

export const Section = styled.div`
	display: flex;
	gap: 1rem;

	/* border: 1px solid blue; */
`

export const Cell = styled.div`
	min-width: 75px;
	display: flex;
	justify-content: center;
	align-items: center;

	/* border-bottom: 3px solid green; */

	a {
		color: black;
	}
`
