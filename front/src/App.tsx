import React from 'react'
import AppRoutes from './routing/AppRoutes'

interface Props {}

const App: React.FC<Props> = () => {
	return (
		<>
			<AppRoutes />
			<div>the heck</div>
		</>
	)
}

export default App
