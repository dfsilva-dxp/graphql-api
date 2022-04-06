import { gql } from "apollo-server";

export const productTypeDefs = gql`
  extend type Query {
    product: Product!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    quantity: Int!
  }
`;
