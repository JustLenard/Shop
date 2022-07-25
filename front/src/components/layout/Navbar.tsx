import React from 'react'
import { NavbarContainer } from './Navbar.style'
// import styled from 'styled-components'

// const NavbarContainer = styled.nav`
// 	display: flex;
// 	justify-content: space-between;
// `

interface Props {}

const Navbar: React.FC<Props> = () => {
	return (
		<NavbarContainer>
			<div>
				<div>women</div>
				<div>man</div>
				<div>kids</div>
			</div>
			<div>Logo</div>
			<div>
				<div>money</div>
				<div>cart</div>
			</div>
		</NavbarContainer>
	)
}

export default Navbar
