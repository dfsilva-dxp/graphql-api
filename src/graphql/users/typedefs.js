import { gql } from "apollo-server";

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): UserResult
    users(filter: FiltersInput): [User]
  }

  union UserResult = User | UserNotFound

  type User {
    id: ID!
    indexRef: Int!
    firstName: String!
    lastName: String!
    userName: String!
    posts: [Post]
    created_at: String!
  }

  interface UserError {
    status: Int!
    message: String!
  }

  type UserNotFound implements UserError {
    status: Int!
    message: String!
  }
`;
