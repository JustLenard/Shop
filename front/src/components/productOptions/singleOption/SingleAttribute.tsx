import React from 'react'
import { IAttributeWithSelection } from '../../../types/types'
import SingleColor from './SingleColor'
import SingleSize from './SingleSize'

interface Props {
	attribute: IAttributeWithSelection
}

const SingleAttribute: React.FC<Props> = ({ attribute }) => {
	const variants = {
		color: <SingleColor color={attribute.value} />,
		size: <SingleSize size={attribute.value} />,
	}

	return <>{variants[attribute.type as keyof typeof variants]}</>
}

export default SingleAttribute
