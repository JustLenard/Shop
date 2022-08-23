import React from 'react'
import * as S from './styles/Color.styles'

interface Props {
    colors: { color: string }[]
}

const Color: React.FC<Props> = ({ colors }) => {
    return (
        <S.Container>
            <S.OptionName>Color</S.OptionName>
            <S.Wrapper>
                {colors.map((colorObj, index) => (
                    <S.Color color={colorObj.color} key={index}></S.Color>
                ))}
            </S.Wrapper>
        </S.Container>
    )
}

export default Color
