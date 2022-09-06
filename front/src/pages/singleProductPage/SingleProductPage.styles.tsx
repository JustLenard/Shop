import styled from 'styled-components'
export { ProductName } from '../../components/cards/styles/CartItemCard.styles'

export const MainContainer = styled.div`
    display: flex;
    /* width: 100%; */

    border: 2px solid red;
`

export const ImagesContainer = styled.div`
    display: flex;
    /* flex-grow: 50%; */
    /* flex: 0 0 50; */
    /* flex-grow: 50; */
    width: 60%;

    border: 5px solid purple;
`

export const SmallImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    img {
        object-fit: cover;
        width: 150px;
        height: 150px;
    }
`

export const BigImageWrapper = styled.div`
    /* width: 100%; */
    border: 2px solid red;

    max-width: 600px;
    max-height: 600px;
    margin: 0 auto;

    img {
        /* width: 200px;
        height: 200px; */
        /* width: 100%;
        height: 100%; */
        object-fit: cover;
    }
`

export const ProductInfo = styled.div`
    /* flex-grow: 50; */
    /* flex: 0 0 50; */
    width: 40%;

    border: 2px solid green;

    padding: 2rem;
`

export const Flex = styled.div`
    border: 2px solid green;

    display: flex;
`

export const Description = styled.p`
    margin-top: 1rem;
`
