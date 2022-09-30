import React, { useState } from 'react'
import * as S from './styles/ButtonWithAnimation.styles'
import { Cart2SVG, ParachuteSVG } from '../../assets/icons'

interface Props {
	handleClick: () => void
}

const ButtonWithAnimation: React.FC<Props> = ({ handleClick }) => {
	const [active, setActive] = useState('')

	const addToCart = () => {
		setActive('active')
		handleClick()
	}

	return (
		<S.Wrapper onClick={addToCart}>
			<button className={`btn ${active}`}>
				<Cart2SVG className="btn__icon btn__icon--cart"></Cart2SVG>
				<ParachuteSVG className="btn__icon btn__icon--box"></ParachuteSVG>
				<span className="btn__text btn__text--first">Add to cart</span>
				<span className="btn__text btn__text--second">Added</span>
			</button>
		</S.Wrapper>
	)
}

export default ButtonWithAnimation
