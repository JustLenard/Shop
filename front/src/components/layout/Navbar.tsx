import React from 'react'
import { NavbarContainer, Cell } from './styles/Navbar.styles'

interface Props {}

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
