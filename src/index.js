import { ApolloServer } from "apollo-server";

import { api } from "./services/api";

import { typeDefs, resolvers } from "./graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,

  context: () => {
    return {
      api
    };
  }
});

server.listen(4004).then(({ url }) => {
  console.log(url);
});
