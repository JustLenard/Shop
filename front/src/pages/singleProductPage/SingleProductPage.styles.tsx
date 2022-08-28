import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
`

export const ImagesContainer = styled.div`
    display: flex;
    /* flex-grow: 50%; */
    flex: 0 0 50;

    border: 2px solid purple;
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
    border: 2px solid red;

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`

export const ProductInfo = styled.div`
    /* flex-grow: 50%; */
    flex: 0 0 50;

    border: 2px solid green;
`
