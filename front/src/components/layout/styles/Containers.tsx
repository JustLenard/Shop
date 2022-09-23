import { size } from '../../../utils/breakpoints'
import styled from 'styled-components'

export const MainContainer = styled.div`
	padding: 0.5rem;

	@media ${size.md} {
		padding: 1rem;
	}

	@media ${size.lg} {
		padding: 2rem;
	}
`

export const FlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	gap: 2rem;
`
