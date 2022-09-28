import { gql } from '@apollo/client'

export const getProductsFromCategory = (currentCategory: string) => {
	return gql`
        query {
            getProductsByCategory(category: "${currentCategory}") {
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
}
