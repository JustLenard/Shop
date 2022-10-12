import * as S from './styles/Hamburger.styles'

interface Props {
	onClick: () => void
}

const Hamburger: React.FC<Props> = ({ onClick }) => {
	return (
		<S.Hamburger onClick={onClick}>
			<div></div>
			<div></div>
			<div></div>
		</S.Hamburger>
	)
}

export default Hamburger
