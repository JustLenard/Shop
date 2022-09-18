import React from 'react'
import { Link } from 'react-router-dom'
import { MoneyDropdown } from '../dropdowns'
import { NavbarContainer, Cell } from './styles/Navbar.styles'

interface Props {}

const Navbar: React.FC<Props> = () => {
    return (
        <NavbarContainer>
            <Cell>
                {/* <Link>
                
                </Link> */}
                {/* <div>women</div>
                <div>man</div>
                <div>kids</div> */}

                {/* <Link to={routes}></Link> */}
            </Cell>
            <Cell>Logo</Cell>
            <Cell>
                <MoneyDropdown />
                <div>cart</div>
            </Cell>
        </NavbarContainer>
    )
}

export default Navbar
