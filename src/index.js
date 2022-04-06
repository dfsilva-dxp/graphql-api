import { ApolloServer } from "apollo-server";

import { typeDefs, resolvers } from "./graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4004).then(({ url }) => {
  console.log(url);
});
