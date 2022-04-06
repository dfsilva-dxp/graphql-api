import { gql } from "apollo-server";

export const customerTypeDefs = gql`
  extend type Query {
    customer: Customer!
    customers: [Customer!]!
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
    date: String
  }
`;
