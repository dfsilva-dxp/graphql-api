import { gql } from "apollo-server";

import { userResolvers } from "./users/resolvers";
import { usersTypeDefs } from "./users/typedefs";

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

export const typeDefs = [rootTypeDefs, usersTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
