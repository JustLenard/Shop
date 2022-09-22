import { gql } from '@apollo/client'

export const getProductsFromCategory = (currentCategory: string) => {
    return gql`
        query {
            getProductsByCategory(category: "${currentCategory}") {
                id
                name
                category
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
