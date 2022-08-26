import React from 'react'
import * as S from './styles/Button.styles'

type colors = 'green' | 'white'

interface Props {
    text: string
    color: colors
}

const Button: React.FC<Props> = ({ text, color }) => {
    const buttonTypes = {
        green: <S.GreenButton>{text}</S.GreenButton>,
        white: <S.WhiteButton>{text}</S.WhiteButton>,
    }

    return buttonTypes[color]
}

export default Button
