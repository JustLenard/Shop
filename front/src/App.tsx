import React from 'react'
import AppRoutes from './routing/AppRoutes'
import { GlobalStyle } from './styles/globalStyles.styels'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    useQuery,
    gql,
} from '@apollo/client'

const queryProducts = gql`
    query {
        getAllProducts {
            name
            price
        }
    }
`

interface Props {}

const App: React.FC<Props> = () => {
    const { data } = useQuery(queryProducts)

    if (data) {
        console.log(data)
    }
    console.log('hey')

    return (
        <>
            <GlobalStyle />
            {<AppRoutes />}
        </>
    )
}

export default App
