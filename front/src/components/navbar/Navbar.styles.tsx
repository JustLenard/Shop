import styled from 'styled-components'
import { size } from '../../utils/breakpoints'

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
	flex-direction: column-reverse;
	justify-content: space-between;

	height: auto;

	@media ${size.sm} {
		flex-direction: row;
		height: 4rem;
	}
`

export const Section = styled.div`
	display: flex;
	flex: 1;
	gap: 1rem;
`

export const RightSection = styled(Section)`
	justify-content: flex-end;
`

export const MobileNav = styled.div`
	flex: 2;
	display: flex;
`

export const NavLinks = styled.div<{ open: boolean }>`
	flex: 1;
	display: ${({ open }) => (open ? 'flex' : 'none')};

	gap: 1rem;
	flex-direction: column-reverse;

	padding: 1rem 0;

	@media ${size.sm} {
		display: flex;
		flex-direction: row;
		padding: 0;
	}
`

export const Cell = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 50px;

	@media ${size.sm} {
		min-width: 75px;
	}
`

export const LogoWrapper = styled.div`
	width: 60px;
	height: 60px;

	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LinkCell = styled(Cell)<{ active: boolean }>`
	transition: all 150ms ease-in-out;

	a {
		border-bottom: ${(props) => (props.active ? '1px solid var(--green)' : 'none')};

		color: black;

		@media ${size.sm} {
			border-bottom: none;
		}
	}

	@media ${size.sm} {
		border-bottom: ${(props) => (props.active ? '3px solid var(--green)' : 'none')};
		padding-bottom: ${(props) => (props.active ? '.3rem' : 'none')};
	}
`
