import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../../assets/icons'
import { routes } from '../../routing/routes'
import { MoneyDropdown } from '../dropdowns'
import * as S from './styles/Navbar.styles'
// import { Cart as ReactComponent } from '../../assets/icons/cart.svg'

interface Props {}

const Navbar: React.FC<Props> = () => {
	return (
		<S.NavbarContainer>
			<S.Section>
				<S.LinkWrapper>
					<Link to={routes.productsPage} state={'All'}>
						All
					</Link>
				</S.LinkWrapper>
				<S.LinkWrapper>
					<Link to={routes.productsPage} state={'Women'}>
						Women
					</Link>
				</S.LinkWrapper>
				<S.LinkWrapper>
					<Link to={routes.productsPage} state={'Men'}>
						Man
					</Link>
				</S.LinkWrapper>
			</S.Section>
			<S.Section>Logo</S.Section>
			<S.Section>
				<MoneyDropdown />
				<S.CartWrapper>
					<Cart />
					<S.ItemsAmount>2</S.ItemsAmount>
				</S.CartWrapper>
			</S.Section>
		</S.NavbarContainer>
	)
}

export default Navbar
