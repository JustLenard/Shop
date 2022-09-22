import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import { MainContainer } from './styles/Containers'

interface IContext {
	currency?: string
	setCurrency: React.Dispatch<React.SetStateAction<string>>
}

export const GlobalContext = createContext<IContext>({
	setCurrency: () => {},
})
interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
	const [currency, setCurrency] = useState('USD')
	const value = {
		currency: currency,
		setCurrency: setCurrency,
	}

	return (
		<>
			<GlobalContext.Provider value={value}>
				<Navbar />
				<MainContainer>{props.children}</MainContainer>
			</GlobalContext.Provider>
		</>
	)
}

export default Layout
