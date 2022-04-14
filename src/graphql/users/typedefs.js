import { gql } from "apollo-server";

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): UserResult
    users(filter: FiltersInput): [User]
  }

  union UserResult = UserNotFound | User

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
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
