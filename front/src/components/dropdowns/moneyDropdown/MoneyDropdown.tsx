import React, { useContext, useState } from 'react'
import { ICurrencyObj } from '../../../types/types'
import { GlobalContext } from '../../layout/Layout'
import * as S from './MoneyDropdown.styles'

interface Props {}

const money: Array<ICurrencyObj> = [
	{ currency: 'USD', symbol: '$' },
	{ currency: 'EUR', symbol: '€' },
	{ currency: 'GBP', symbol: '£' },
	{ currency: 'AUD', symbol: 'A$' },
	{ currency: 'JPY', symbol: '¥' },
	{ currency: 'RUB', symbol: '₽' },
]

const MoneyDropdown: React.FC<Props> = () => {
	const { currencyObj, setCurrencyObj } = useContext(GlobalContext)

	const selectItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedCurrencyObj = money.find((obj) => obj.currency === e.target.value) || {
			currency: 'USD',
			symbol: '$',
		}

		setCurrencyObj(selectedCurrencyObj)
	}

	return (
		<S.Select value={currencyObj.currency} onChange={(e) => selectItem(e)}>
			{money.map((item, index) => (
				<S.Option key={index} value={item.currency}>
					{item.symbol} {item.currency}
				</S.Option>
			))}
		</S.Select>
	)
}

export default MoneyDropdown
