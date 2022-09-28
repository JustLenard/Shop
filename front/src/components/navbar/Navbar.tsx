import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../../routing/routes'
import { CartDropdown, MoneyDropdown } from '../dropdowns'
import * as S from './Navbar.styles'
import logo from '../../assets/images/logo.jpeg'

interface Props {}

const Navbar: React.FC<Props> = () => {
	const [highlight, useHighlight] = useState('All')

	const location = useLocation()
	const currentCategory = location.pathname.split(':')[1]
	// console.log('This is location', location)
	console.log('This is currentCategory', currentCategory)

	return (
		<S.NavbarContainer>
			<S.SectionsWrapper>
				<S.Section>
					<S.LinkCell active={currentCategory === 'All'}>
						<Link to={routes.productsPage('All')}>All</Link>
					</S.LinkCell>

					<S.LinkCell active={currentCategory === 'Women'}>
						<Link to={routes.productsPage('Women')}>Women</Link>
					</S.LinkCell>

					<S.LinkCell active={currentCategory === 'Men'}>
						<Link to={routes.productsPage('Men')}>Men</Link>
					</S.LinkCell>
				</S.Section>
				<S.Section>
					<S.LogoWrapper>
						<img src={logo} alt="logo" />
					</S.LogoWrapper>
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
