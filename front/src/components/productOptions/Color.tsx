import React from 'react'
import * as S from './styles/Color.styles'
import { IAttributeSet } from '../../types/types'

interface Props {
    attributeSet: IAttributeSet
}

const Color: React.FC<Props> = ({ attributeSet }) => {
    const { name, items } = attributeSet

    return (
        <S.Container>
            <S.OptionName>{name}</S.OptionName>
            <S.Wrapper>
                {items.map((colorObj, index) => (
                    <S.Color color={colorObj.value} key={index}></S.Color>
                ))}
            </S.Wrapper>
        </S.Container>
    )
}

export default Color
