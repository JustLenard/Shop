import React from 'react'
import { NavbarContainer } from './style'
// import { NavbarContainer } from './Style'

import styled from 'styled-components'

interface Props {}

export const Cell = styled.div`
	display: flex;
	gap: 1rem;
`

const Navbar: React.FC<Props> = () => {
	return (
		<NavbarContainer>
			<Cell>
				<div>women</div>
				<div>man</div>
				<div>kids</div>
			</Cell>
			<Cell>Logo</Cell>
			<Cell>
				<div>money</div>
				<div>cart</div>
			</Cell>
		</NavbarContainer>
	)
}

export default Navbar
