import { gql } from "apollo-server";

export const usersTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
  }
`;
