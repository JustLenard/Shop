import React from 'react'
import * as S from './styles/Button.styles'

type colors = 'green' | 'white' | 'red' | 'order'

interface Props {
	text: string
	type: colors
	handleClick?: (arg: any) => void
}

const Button: React.FC<Props> = ({ handleClick, text, type }) => {
	const buttonTypes = {
		green: <S.GreenButton onClick={handleClick}>{text}</S.GreenButton>,
		white: <S.WhiteButton onClick={handleClick}> {text}</S.WhiteButton>,
		red: <S.RedButton onClick={handleClick}> {text}</S.RedButton>,
		order: <S.OrderButton onClick={handleClick}>{text}</S.OrderButton>,
	}

	return buttonTypes[type]
}

export default Button
