import { gql } from "apollo-server";

import { filtersTypeDeds } from "./filters/typedefs";
import { postsTypeDefs } from "./posts/typedefs";
import { userTypeDefs } from "./users/typedefs";

import { filtersResolvers } from "./filters/resolvers";
import { postResolvers } from "./posts/resolvers";
import { userResolvers } from "./users/resolvers";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true
  },
  Mutation: {
    _empty: () => true
  }
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postsTypeDefs,
  filtersTypeDeds
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  filtersResolvers
];
