import React from 'react'
import Navbar from './Navbar'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
    // console.log(props)
    return (
        <>
            <Navbar />
            <div>{props.children}</div>
        </>
    )
}

export default Layout
