import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routing/routes'
import { MoneyDropdown } from '../dropdowns'
import * as S from './styles/Navbar.styles'

interface Props {}

const Navbar: React.FC<Props> = () => {
    return (
        <S.NavbarContainer>
            <S.Section>
                <S.LinkWrapper>
                    <Link to={routes.productPage} state={'All'}>
                        All
                    </Link>
                </S.LinkWrapper>
                <S.LinkWrapper>
                    <Link to={routes.productPage} state={'Women'}>
                        Women
                    </Link>
                </S.LinkWrapper>
                <S.LinkWrapper>
                    <Link to={routes.productPage} state={'Men'}>
                        Man
                    </Link>
                </S.LinkWrapper>
            </S.Section>
            <S.Section>Logo</S.Section>
            <S.Section>
                <MoneyDropdown />
                <div>cart</div>
            </S.Section>
        </S.NavbarContainer>
    )
}

export default Navbar
