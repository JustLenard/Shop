import styled from 'styled-components'

const Button = styled.button`
    padding: 1rem 2rem;
    display: inline-block;
    border: none;
    text-transform: uppercase;
`

export const GreenButton = styled(Button)`
    background-color: var(--green);
    color: var(--white);

    /* Because there is no height/width, the white button with border
    is bigger the green one without, hence this. Don't know if
    there is a better way of doing this */
    padding: 17px 33px;
`

export const WhiteButton = styled(Button)`
    border: 1px solid black;
    background-color: var(--white);
`
