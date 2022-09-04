import React from 'react'
import * as S from './CartDropdown.styles'

interface Props {}

const CartDropdown: React.FC<Props> = () => {
    return (
        <>
            <S.CartIcon></S.CartIcon>
            <S.Dropdown>Content</S.Dropdown>
        </>
    )
}

export default CartDropdown
