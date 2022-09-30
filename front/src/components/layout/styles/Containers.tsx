import { size } from '../../../utils/breakpoints'
import styled from 'styled-components'

export const MainContainer = styled.div`
	padding: 1rem;

	@media ${size.md} {
		padding: 1.5rem;
	}

	@media ${size.lg} {
		padding: 2rem;
	}
`
