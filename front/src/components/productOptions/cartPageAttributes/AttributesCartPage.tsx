import React from 'react'
import {
	IAttributeSet,
	IAttribute,
	IAttributeWithSelection,
	attributeTypes,
} from '../../../types/types'
import ColorSelectionCart from './ColorSelectionCart'
import SizeSelectionCart from './SizeSelectionCart'

interface Props {
	attributeSet: IAttributeSet
	cartItemId: string
}

const AttributesCartPage: React.FC<Props> = ({ attributeSet, cartItemId }) => {
	const atribType: attributeTypes = attributeSet.type

	const attrTypes = {
		color: (
			<ColorSelectionCart
				cartItemId={cartItemId}
				attributeSet={attributeSet}
				atribType={atribType}
			/>
		),
		size: (
			<SizeSelectionCart
				cartItemId={cartItemId}
				attributeSet={attributeSet}
				atribType={atribType}
			/>
		),
	}

	return <>{attrTypes[atribType as keyof typeof attrTypes]}</>
}

export default AttributesCartPage
