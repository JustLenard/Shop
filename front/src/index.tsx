import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import Fuck from './Fuck'
// import { fuck } from './styes/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<App />
		{/* <Fuck /> */}
	</React.StrictMode>
)
