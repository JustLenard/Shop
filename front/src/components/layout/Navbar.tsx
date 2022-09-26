import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
					<S.Cell>
						<Link to={routes.productsPage} state={'All'}>
							All
						</Link>
					</S.Cell>
					<S.Cell>
						<Link to={routes.productsPage} state={'Women'}>
							Women
						</Link>
					</S.Cell>
					<S.Cell>
						<Link to={routes.productsPage} state={'Men'}>
							Man
						</Link>
					</S.Cell>
				</S.Section>
				<S.Section>
					<S.Cell>Logo</S.Cell>
				</S.Section>
				<S.Section>
					<S.Cell>
						<CartDropdown />
					</S.Cell>
					<S.Cell>
						<MoneyDropdown />
					</S.Cell>
				</S.Section>
			</S.SectionsWrapper>
		</S.NavbarContainer>
	)
}

export default Navbar
