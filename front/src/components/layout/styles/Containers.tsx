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
	justify-content: center;
	flex-wrap: wrap;
	/* display: grid; */
	/* grid-template-columns: repeat(1fr, auto); */
	/* grid-template-columns: minmax(100px, 1fr); */
	gap: 2rem;
`
