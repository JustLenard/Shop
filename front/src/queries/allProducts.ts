import { gql } from '@apollo/client'

export const allProducts = gql`
    query {
        getAllProducts {
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
