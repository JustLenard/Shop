import React from 'react'
import * as S from './styles/Button.styles'

interface Props {
    text: string
    color?: string
}

const Button: React.FC<Props> = ({ text, color }) => {
    return <S.Container>text</S.Container>
}

export default Button
