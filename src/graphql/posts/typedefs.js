import { gql } from "apollo-server";

export const postsTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult
    posts(filter: FiltersInput): [Post!]!
  }

  union PostResult = Post | PostNotFound

  type Post {
    id: ID!
    indexRef: Int!
    userId: String!
    title: String!
    body: String!
    user: User
    created_at: String!
  }

  type PostNotFound {
    status: Int!
    message: String!
  }
`;
