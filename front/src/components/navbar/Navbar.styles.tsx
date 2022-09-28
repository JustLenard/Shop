import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	background-color: #faf6f6;
	border-bottom: 1px solid var(--grayBorder);
	box-shadow: -8px 1px 18px 2px rgba(189, 188, 188, 0.75);
	-webkit-box-shadow: -8px 1px 18px 2px rgba(189, 188, 188, 0.75);
	-moz-box-shadow: -8px 1px 18px 2px rgba(189, 188, 188, 0.75);
`

export const SectionsWrapper = styled.div`
	margin: 0 auto;
	width: 90%;
	display: flex;
	justify-content: space-between;

	height: 4rem;
`

export const Section = styled.div`
	display: flex;
	gap: 1rem;
`

export const Cell = styled.div`
	min-width: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LogoWrapper = styled.div`
	width: 60px;
	height: 60px;

	img {
		object-fit: cover;
	}
`

export const LinkCell = styled(Cell)<{ active: boolean }>`
	transition: all 150ms ease-in-out;

	border-bottom: ${(props) => (props.active ? '3px solid var(--green)' : 'none')};
	padding-bottom: ${(props) => (props.active ? '.3rem' : 'none')};

	a {
		color: black;
	}
`
