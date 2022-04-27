import { ApolloServer } from "apollo-server";

import { context } from "./graphql/context";
import { PostsAPI } from "./graphql/posts/datasources";
import { UsersAPI } from "./graphql/users/datasources";

import { typeDefs, resolvers } from "./graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postAPI: new PostsAPI(),
      userAPI: new UsersAPI()
    };
  }
});

server.listen(4005).then(({ url }) => {
  console.log(url);
});
