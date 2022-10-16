import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../../routing/routes'
import { CartDropdown, MoneyDropdown } from '../dropdowns'
import * as S from './Navbar.styles'
import logo from '../../assets/images/newLogo.jpeg'
import Hamburger from '../buttons/Hamburger'
import { Logo } from '../../assets/icons'

interface Props {}

const Navbar: React.FC<Props> = () => {
	const [open, setOpen] = useState(false)
	const location = useLocation()
	const currentCategory = location.pathname.split(':')[1]

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<S.NavbarContainer>
			<S.SectionsWrapper>
				<S.NavLinks open={open}>
					<S.LinkCell active={currentCategory === 'All'}>
						<Link to={routes.productsPage('All')}>All</Link>
					</S.LinkCell>

					<S.LinkCell active={currentCategory === 'Women'}>
						<Link to={routes.productsPage('Women')}>Women</Link>
					</S.LinkCell>

					<S.LinkCell active={currentCategory === 'Men'}>
						<Link to={routes.productsPage('Men')}>Men</Link>
					</S.LinkCell>
				</S.NavLinks>

				<S.MobileNav>
					<S.Section>
						<Hamburger onClick={handleClick} />
						<S.LogoWrapper>
							{/* <img src={logo} alt="logo" /> */}
							<Logo />
						</S.LogoWrapper>
					</S.Section>
					<S.RightSection>
						<S.Cell>
							<CartDropdown />
						</S.Cell>
						<S.Cell>
							<MoneyDropdown />
						</S.Cell>
					</S.RightSection>
				</S.MobileNav>
			</S.SectionsWrapper>
		</S.NavbarContainer>
	)
}

export default Navbar
