import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routing/routes'
import { CartDropdown, MoneyDropdown } from '../dropdowns'
import * as S from './styles/Navbar.styles'
// import { Cart as ReactComponent } from '../../assets/icons/cart.svg'

interface Props {}

const Navbar: React.FC<Props> = () => {
	return (
		<S.NavbarContainer>
			<S.SectionsWrapper>
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
					<CartDropdown />
					<MoneyDropdown />
				</S.Section>
			</S.SectionsWrapper>
		</S.NavbarContainer>
	)
}

export default Navbar
