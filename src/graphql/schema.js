import { gql } from "apollo-server";
import { customerResolvers } from "./customer/resolvers";
import { customerTypeDefs } from "./customer/typedefs";
import { productResolvers } from "./products/resolvers";
import { productTypeDefs } from "./products/typedefs";

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

export const typeDefs = [rootTypeDefs, customerTypeDefs, productTypeDefs];
export const resolvers = [rootResolvers, customerResolvers, productResolvers];
