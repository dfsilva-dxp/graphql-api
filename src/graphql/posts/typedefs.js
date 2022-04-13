import { gql } from "apollo-server";

export const postsTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult
    posts(filter: FiltersInput): [Post!]!
  }

  union PostResult = Post | PostNotFound

  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    created_at: String!
  }

  type PostNotFound {
    status: Int!
    message: String!
  }
`;
