import React from 'react'
import * as S from './SingleProductPage.styles'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { Size, Color } from '../../components/productOptions'

interface Props {}

const SingleProductPage: React.FC<Props> = () => {
    const handleClick = () => {
        console.log('f')
    }

    return (
        <>
            <S.MainContainer>
                <S.ImagesContainer>
                    <S.SmallImages>
                        <img
                            onClick={handleClick}
                            src={animeGirl}
                            alt="product"
                        />
                        <img src={animeGirl} alt="product" />
                        <img src={animeGirl} alt="product" />
                    </S.SmallImages>
                    <S.BigImageWrapper>
                        <img src={animeGirl} alt="product" />
                    </S.BigImageWrapper>
                </S.ImagesContainer>
                <S.ProductInfo>
                    <S.ProductName>Apollow running short</S.ProductName>
                    <Size name={'size'} sizes={[{ size: 'small' }]} />
                    <Color colors={[{ color: 'small' }]} />
                </S.ProductInfo>
            </S.MainContainer>
        </>
    )
}

export default SingleProductPage
