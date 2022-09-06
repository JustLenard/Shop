import React from 'react'
import * as S from './SingleProductPage.styles'
import animeGirl from '../../assets/images/animeGirl.jpeg'
import { Price, Size, Color } from '../../components/productOptions'
import { Button } from '../../components/buttons'

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
                    <Price symbol={'$'} price={50} />
                    <Button text={'add to cart'} color={'green'} />
                    <S.Description>
                        Dolor qui incididunt adipisicing id laboris id elit. In
                        commodo veniam commodo voluptate ipsum cupidatat cillum
                        ullamco nostrud ex. Dolore duis velit cupidatat eu amet
                        et deserunt. Pariatur deserunt laboris aliquip enim
                        dolore minim velit consectetur nulla do. Minim ex sit
                        reprehenderit voluptate magna labore culpa consequat
                        adipisicing elit cupidatat eu ex ad. Fugiat dolore
                        officia aliqua cupidatat veniam irure nisi minim
                        reprehenderit nisi. In ex sit ullamco qui.
                    </S.Description>
                </S.ProductInfo>
            </S.MainContainer>
        </>
    )
}

export default SingleProductPage
