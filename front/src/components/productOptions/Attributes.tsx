import React from 'react'
import { IAttributeSet, IAttribute, IAttributeWithSelection } from '../../types/types'
import ColorsSelection from './ColorsSelection'
import Size from './Size'

interface Props {
	attributeSet: IAttributeSet
	addAttributes: (attribute: IAttribute, attributeSet: IAttributeSet) => void
	selectedAttributes?: Array<IAttributeWithSelection>
}

const Attributes: React.FC<Props> = ({ addAttributes, attributeSet }) => {
	const atribType = attributeSet.type

	const attrTypes = {
		color: <ColorsSelection addAttributes={addAttributes} attributeSet={attributeSet} />,
		size: <Size addAttributes={addAttributes} attributeSet={attributeSet} />,
	}

	return <>{attrTypes[atribType as keyof typeof attrTypes]}</>
}

export default Attributes
