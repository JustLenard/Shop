import React from 'react'
import AppRoutes from './routing/AppRoutes'
import { GlobalStyle } from './styles/globalStyles.styels'

interface Props {}

const App: React.FC<Props> = () => {
    return (
        <>
            <GlobalStyle />
            {<AppRoutes />}
        </>
    )
}

export default App
