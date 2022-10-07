import React from 'react'
import { IAttributeSet, IAttribute } from '../../../types/types'
import ColorsSelection from './ColorSelectionProduct'
import SizeSelectionProduct from './SizeSelectionProduct'

interface Props {
	attributeSet: IAttributeSet
	addAttributes: (attribute: IAttribute, attributeSet: IAttributeSet) => void
}

const AttributesProduct: React.FC<Props> = ({ addAttributes, attributeSet }) => {
	const atribType = attributeSet.type

	const attrTypes = {
		color: <ColorsSelection addAttributes={addAttributes} attributeSet={attributeSet} />,
		size: <SizeSelectionProduct addAttributes={addAttributes} attributeSet={attributeSet} />,
	}

	return <>{attrTypes[atribType as keyof typeof attrTypes]}</>
}

export default AttributesProduct
