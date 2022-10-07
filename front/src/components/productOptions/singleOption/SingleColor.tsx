import React from 'react'
import * as S from './styles/SingleColor.styles'

interface Props {
	color: string
}

const SingleColor: React.FC<Props> = ({ color }) => {
	return <S.SingleColor color={color}></S.SingleColor>
}

export default SingleColor
