import styled from 'styled-components'

export const OptionName = styled.div`
    text-transform: uppercase;
    font-weight: bold;

    margin-top: 0.5rem;
`

export const SquareContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Square = styled.div<{ highlight: boolean }>`
    padding: 0.5rem;
    border: 1px solid black;
    background-color: var(--black);

    background-color: ${({ highlight }) =>
        highlight ? 'var(--black)' : 'var(--white)'};

    color: ${({ highlight }) => (highlight ? 'var(--white)' : 'var(--black)')};
`
