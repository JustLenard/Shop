import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routing/routes'
import { MoneyDropdown } from '../dropdowns'
import { NavbarContainer, Cell } from './styles/Navbar.styles'

interface Props {}

const Navbar: React.FC<Props> = () => {
    return (
        <NavbarContainer>
            <Cell>
                <Link to={routes.productPage} state={'Women'}>
                    Women
                </Link>

                <Link to={routes.productPage} state={'Man'}>
                    Man
                </Link>
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
