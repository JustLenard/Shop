import styled from 'styled-components'
export { OptionName, Container, Wrapper } from './Shared.styles'

export const SizeContainer = styled.div<{ highlight: boolean }>`
    padding: 0.5rem;
    border: 1px solid black;
    background-color: var(--black);

    background-color: ${({ highlight }) =>
        highlight ? 'var(--black)' : 'var(--white)'};

    color: ${({ highlight }) => (highlight ? 'var(--white)' : 'var(--black)')};
`
