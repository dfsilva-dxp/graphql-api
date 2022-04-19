import { ApolloServer } from "apollo-server";

import { api } from "./services/api";

import { makeDataLoader } from "./utils/makeDataLoader";
import { typeDefs, resolvers } from "./graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,

  context: () => {
    return {
      api,
      userDataLoader: makeDataLoader.users(api),
      postsDataLoader: makeDataLoader.posts(api)
    };
  }
});

server.listen(4005).then(({ url }) => {
  console.log(url);
});
