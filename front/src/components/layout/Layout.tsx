import React from 'react'
import Navbar from './Navbar'
import { MainContainer } from './styles/Containers'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
    return (
        <>
            <Navbar />
            <MainContainer>{props.children}</MainContainer>
        </>
    )
}

export default Layout
