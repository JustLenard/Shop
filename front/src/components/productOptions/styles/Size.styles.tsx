import styled from 'styled-components'
export { OptionName, Container, Wrapper } from './Shared.styles'

export const SizeContainer = styled.div<{ highlight: boolean }>`
	padding: 0.5rem;
	border: 1px solid black;
	cursor: pointer;
	transition: 0.3s linear;

	border: ${({ highlight }) => (highlight ? ' none' : '1px solid black')};

	background-color: ${({ highlight }) => (highlight ? 'var(--green2)' : 'var(--white)')};
	scale: ${({ highlight }) => (highlight ? '1.2' : '1')};

	color: ${({ highlight }) => (highlight ? 'var(--white)' : 'var(--black)')};
	box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.4);
`
