import { gql } from "apollo-server";

export const postsTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult
    posts(filter: FiltersInput): [Post!]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): PostResult!
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

  input CreatePostInput {
    title: String!
    body: String!
    userId: String!
  }
`;
