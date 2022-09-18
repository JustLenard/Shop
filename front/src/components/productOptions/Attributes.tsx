import React from 'react'
import { IAttributeSet, IAttribute } from '../../types/types'
import Color from './Color'
import Size from './Size'

interface Props {
    attributeSet: IAttributeSet
    addAttributes: (attribute: IAttribute, attributeSet: IAttributeSet) => void
}

const Attributes: React.FC<Props> = ({ addAttributes, attributeSet }) => {
    const attrTypes = {
        color: (
            <Color addAttributes={addAttributes} attributeSet={attributeSet} />
        ),
        size: (
            <Size addAttributes={addAttributes} attributeSet={attributeSet} />
        ),
    }
    const val = attributeSet.type

    return <>{attrTypes[val as keyof typeof attrTypes]}</>
}

export default Attributes
