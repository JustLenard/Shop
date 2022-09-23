import styled from 'styled-components/macro'
export { OptionName, Container, Wrapper } from './Shared.styles'

export const SizeContainer = styled.div<{ highlight: boolean }>`
	padding: 0.5rem;
	border: 1px solid black;
	background-color: var(--black);
	cursor: pointer;
	transition: 0.3s linear;

	background-color: ${({ highlight }) => (highlight ? 'var(--black)' : 'var(--white)')};
	scale: ${({ highlight }) => (highlight ? '1.2' : '1')};

	color: ${({ highlight }) => (highlight ? 'var(--white)' : 'var(--black)')};
`
