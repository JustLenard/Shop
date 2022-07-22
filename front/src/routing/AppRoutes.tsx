import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routeElements } from './routes'

interface Props {}

const AppRoutes: React.FC<Props> = () => {
	return (
		<Router>
			<Routes>
				{routeElements.map(route => {
					return <Route {...route} key={route.path} />
				})}
			</Routes>
		</Router>
	)
}

export default AppRoutes
