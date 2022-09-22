import { gql } from '@apollo/client'

export const getSingleProduct = (id: string) => {
	return gql`
    query {
        getProduct (id:"${id}"){
            id
            name
            description
            category
            prices {
                currency
                amount
                symbol
            }
            brand
            attributes {
                name
                type
                items {
                    displayValue
                    value
                }
            }
            gallery
        }
    }
    `
}
