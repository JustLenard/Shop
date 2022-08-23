import React, { useState } from 'react'
import * as S from './styles/Size.styles'

interface Props {
    name: string
    sizes: {
        size: String
    }[]
}

const Size: React.FC<Props> = ({ sizes }) => {
    const [selected, setSelected] = useState(0)

    const handleClick = (size: { size: String }, index: number) => {
        setSelected(index)
    }

    return (
        <S.Container>
            <S.OptionName>SIZE:</S.OptionName>

            <S.Wrapper>
                {sizes.map((size, index) => (
                    <S.SizeContainer
                        key={index}
                        highlight={index === selected}
                        onClick={() => handleClick(size, index)}
                    >
                        {size.size}
                    </S.SizeContainer>
                ))}
            </S.Wrapper>
        </S.Container>
    )
}

export default Size
