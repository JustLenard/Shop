import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    /* border: 2px solid black; */

    padding: 0.5rem 0;

    border-bottom: 1px solid var(--grayBorder);
    border-top: 1px solid var(--grayBorder);
`

export const Content = styled.div`
    flex-grow: 0.8;

    /* border: 2px solid red; */
`

export const ProductName = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 27px;

    padding-bottom: 0.5rem;
`
export const Price = styled.div``

export const PlusMinusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const PlusMinus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 30px;
    height: 30px;
    border: 1px solid black;
`

export const ImageWrapper = styled.div`
    flex-grow: 0.2;
    width: 20px;

    img {
        /* object-fit: cover; */
        /* width: 100%; */
        /* object-fit: fit; */
    }
`
