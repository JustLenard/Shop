import React from 'react'
import * as S from './styles/SmallCartItem.styles'
import animeGirl from '../../../assets/images/animeGirl.jpeg'
import { XIconSVG } from '../../../assets/icons'

interface Props {}

const SmallCartItem: React.FC<Props> = () => {
	return (
		<S.SmallCartItem>
			<S.ImageAndName href="#">
				<div>
					<img src={animeGirl} alt="" />
				</div>
				<div>This is a anime girl</div>
			</S.ImageAndName>
			<S.Amount>2</S.Amount>
			<S.Price>50$</S.Price>
			<S.XButton>
				<XIconSVG />
			</S.XButton>
		</S.SmallCartItem>
	)
}

export default SmallCartItem
