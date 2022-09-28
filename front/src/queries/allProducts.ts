import { gql } from '@apollo/client'

export const allProducts = gql`
	query {
		getAllProducts {
			id
			name
			category
			brand
			prices {
				currency
				amount
				symbol
			}
			gallery
		}
	}
`
