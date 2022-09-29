import { size } from '../../../utils/breakpoints'
import styled from 'styled-components'
export { ProductName } from '../../../components/cards/styles/CartItemCard.styles'

export const MainContainer = styled.div`
	@media ${size.md} {
		display: flex;
	}
`

export const ProductInfo = styled.div`
	padding: 1rem;

	@media ${size.md} {
		border-left: 4px solid var(--grayBorder);
	}
`

export const BrandName = styled.h4``

export const Description = styled.p`
	margin-top: 1rem;
`
export const AmountWrapper = styled.div``

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
`
