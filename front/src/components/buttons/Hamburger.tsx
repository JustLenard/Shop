import * as S from './styles/Hamburger.styles'

interface Props {
	onClick: () => void
}

const Hamburger: React.FC<Props> = ({ onClick }) => {
	return (
		<S.HamburgerWrapper>
			<S.Hamburger onClick={onClick}>
				<div></div>
				<div></div>
				<div></div>
			</S.Hamburger>
		</S.HamburgerWrapper>
	)
}

export default Hamburger
