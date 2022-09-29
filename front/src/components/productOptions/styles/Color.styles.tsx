import styled from 'styled-components'
export { OptionName, Wrapper, Container } from './Shared.styles'

export const Color = styled.div<{ color: string; highlight: boolean }>`
	border: 1px solid black;
	padding: 1rem;
	background-color: ${({ color }) => color};
	cursor: pointer;
	transition: 0.3s linear;

	box-shadow: ${({ highlight }) =>
		highlight ? '0 2px 3px 0 rgba(0, 0, 0, 0.4); ' : '3px solid white'};

	scale: ${({ highlight }) => (highlight ? '1.3' : '1')};

	border-radius: 3px;
`
