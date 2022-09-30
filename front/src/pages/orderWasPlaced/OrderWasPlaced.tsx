import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/buttons'
import { routes } from '../../routing/routes'
import * as S from './OrderWasPlaced.styles'

const OrderWasPlaced: React.FC = () => {
	const navigate = useNavigate()

	const goHome = () => {
		navigate(routes.productsPage('All'))
	}

	return (
		<>
			<S.Title>Thank you for your patronage!</S.Title>

			<S.FlexContainer>
				<S.First>Your order was given to the following courier company: </S.First>
				<S.Second>Void Express</S.Second>
			</S.FlexContainer>

			<S.FlexContainer>
				<S.First>Current expected delivery date: </S.First>
				<S.Second> Never</S.Second>
			</S.FlexContainer>

			<S.FlexContainer>
				<S.First>
					In case of delays, feel free to contact the courier at the following number:
				</S.First>
				<S.Second> _</S.Second>
			</S.FlexContainer>

			<S.FlexContainer>
				<S.First>The package can be tracked live on the courier website:</S.First>
				<S.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					look-into-the-void
				</S.Link>
			</S.FlexContainer>
			<Button type="green" text="Go home" handleClick={goHome} />
		</>
	)
}

export default OrderWasPlaced
