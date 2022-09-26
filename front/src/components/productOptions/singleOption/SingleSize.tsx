import React from 'react'
import * as S from './styles/SingleSize.styles'

interface Props {
	size: string
}

const SingleSize: React.FC<Props> = ({ size }) => {
	return <S.SizeContainer>{size}</S.SizeContainer>
}

export default SingleSize
