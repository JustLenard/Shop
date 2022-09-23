import styled from 'styled-components/macro'
export { OptionName, Wrapper, Container } from './Shared.styles'

export const Color = styled.div<{ color: string; highlight: boolean }>`
	border: 1px solid black;
	padding: 1rem;
	background-color: ${({ color }) => color};
	cursor: pointer;
	transition: 0.3s linear;

	border: ${({ highlight }) => (highlight ? '3px solid red' : '3px solid white')};
	scale: ${({ highlight }) => (highlight ? '1.1' : '1')};

	border-radius: 3px;
`
