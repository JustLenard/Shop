import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    background-color: gray;
    height: 5rem;
`

export const Section = styled.div`
    display: flex;
    gap: 1rem;
`

export const LinkWrapper = styled.div`
    border: 1px solid red;

    a {
        text-decoration: none;
        color: black;
    }
`
