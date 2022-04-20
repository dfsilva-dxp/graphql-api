import { ApolloServer } from "apollo-server";

import { context } from "./graphql/context";
import { PostsAPI } from "./graphql/posts/datasources";

import { typeDefs, resolvers } from "./graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      api: new PostsAPI()
    };
  }
});

server.listen(4005).then(({ url }) => {
  console.log(url);
});
