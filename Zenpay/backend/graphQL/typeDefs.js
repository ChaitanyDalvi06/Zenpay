import { gql } from 'apollo-server-express';

export const paymentTypeDefs = gql`

type Payment {
    id: ID!
    payeeName: String!
    amount: Float!
    status: String!
}

type Query {
    GetPayments: [Payment!]!
}

`;