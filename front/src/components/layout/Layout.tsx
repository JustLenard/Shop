import React, { createContext, useState } from 'react'
import { ICurrencyObj } from '../../types/types'
import Navbar from '../navbar/Navbar'
import { MainContainer } from './styles/Containers'

interface IContext {
	currencyObj: ICurrencyObj
	setCurrencyObj: React.Dispatch<React.SetStateAction<ICurrencyObj>>
}

export const GlobalContext = createContext<IContext>({
	currencyObj: { currency: 'USD', symbol: '$' },
	setCurrencyObj: () => {},
})
interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
	const [currencyObj, setCurrencyObj] = useState<ICurrencyObj>({
		currency: 'USD',
		symbol: '$',
	})

	const value = {
		currencyObj: currencyObj,
		setCurrencyObj: setCurrencyObj,
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
