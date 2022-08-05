import styled from 'styled-components'

export const CardBody = styled.div`
  width: 300px;
  height: 300px;
  background-color: #666565;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    scale: 1.2;
    /* background-color: red; */
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 80%;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`

export const Title = styled.div`
  margin-top: 1rem;
`

export const Price = styled.div`
  margin-top: 1rem;
`
