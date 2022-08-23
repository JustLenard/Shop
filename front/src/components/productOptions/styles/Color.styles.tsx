import styled from 'styled-components'
export { OptionName, Wrapper, Container } from './Shared.styles'

export const Color = styled.div<{ color: string }>`
    border: 1px solid black;
    padding: 1rem;
    background-color: ${({ color }) => color};
`
