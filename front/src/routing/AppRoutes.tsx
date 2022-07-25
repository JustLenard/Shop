import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { routeElements } from './routes'

interface Props {}

const AppRoutes: React.FC<Props> = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					{routeElements.map(route => {
						return <Route {...route} key={route.path} />
					})}
				</Routes>
			</Layout>
		</Router>
	)
}

export default AppRoutes
