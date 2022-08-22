import React, { useState } from 'react'
import * as S from './styles/Customization.styles'

interface Props {
    name: string
    sizes: {
        size: String
    }[]
}

const Customization: React.FC<Props> = ({ sizes }) => {
    const [selected, setSelected] = useState(0)

    const handleClick = (size: { size: String }, index: number) => {
        setSelected(index)
    }

    return (
        <div>
            <S.OptionName>SIZE:</S.OptionName>

            <S.SquareContainer>
                {sizes.map((size, index) => (
                    <S.Square
                        key={index}
                        highlight={index === selected}
                        onClick={() => handleClick(size, index)}
                    >
                        {size.size}
                    </S.Square>
                ))}
            </S.SquareContainer>
        </div>
    )
}

export default Customization
