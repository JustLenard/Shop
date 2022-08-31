import React from 'react'
import { MoneyDropdown } from '../dropdowns'
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
                {/* <div>money</div> */}
                <MoneyDropdown />
                <div>cart</div>
            </Cell>
        </NavbarContainer>
    )
}

export default Navbar
