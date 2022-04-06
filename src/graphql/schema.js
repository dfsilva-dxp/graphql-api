import { gql } from "apollo-server";
import { postResolvers } from "./posts/resolvers";
import { postsTypeDefs } from "./posts/typedefs";

import { userResolvers } from "./users/resolvers";
import { userTypeDefs } from "./users/typedefs";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true
  }
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postsTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
