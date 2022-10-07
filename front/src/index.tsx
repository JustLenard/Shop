import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { store, persistor } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'http://localhost:5000/graphql',
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ApolloProvider client={client}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</ApolloProvider>
		</PersistGate>
	</Provider>
)
