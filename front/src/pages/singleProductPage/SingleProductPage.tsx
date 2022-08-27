import React from 'react'
import * as S from './SingleProductPage.styles'
import animeGirl from '../../assets/images/animeGirl.jpeg'

interface Props {}

const SingleProductPage: React.FC<Props> = () => {
    return (
        <S.MainContainer>
            <S.ImagesContainer>
                <S.SmallImages>
                    <img src={animeGirl} alt="product" />
                    <img src={animeGirl} alt="product" />
                    <img src={animeGirl} alt="product" />
                </S.SmallImages>
                <S.BigImage>
                    <img src={animeGirl} alt="product" />
                </S.BigImage>
            </S.ImagesContainer>
            <S.ProductInfo></S.ProductInfo>
        </S.MainContainer>
    )
}

export default SingleProductPage
