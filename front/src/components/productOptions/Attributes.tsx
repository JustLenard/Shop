import React from 'react'
import { IAttributeSet } from '../../types/types'
import Color from './Color'
import Size from './Size'

interface Props {
    // attributeType: 'color' | 'size'
    attributeSet: IAttributeSet
}

const Attributes: React.FC<Props> = ({ attributeSet }) => {
    const attrTypes = {
        color: <Color attributeSet={attributeSet} />,
        // size: <Size />,
    }
    const val = attributeSet.type

    console.log('This is attributeSet', attributeSet)

    return <>{attrTypes[val as keyof typeof attrTypes]}</>
}

export default Attributes
