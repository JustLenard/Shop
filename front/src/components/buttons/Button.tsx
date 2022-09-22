import React from 'react'
import * as S from './styles/Button.styles'

type colors = 'green' | 'white'

interface Props {
	text: string
	color: colors
	handleClick?: (arg: any) => void
}

const Button: React.FC<Props> = ({ handleClick, text, color }) => {
	const buttonTypes = {
		green: <S.GreenButton onClick={handleClick}>{text}</S.GreenButton>,
		white: <S.WhiteButton onClick={handleClick}> {text}</S.WhiteButton>,
	}

	return buttonTypes[color]
}

export default Button
