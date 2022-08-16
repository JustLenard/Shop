import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    useQuery,
    gql,
} from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:5000/graphql',
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>
)
