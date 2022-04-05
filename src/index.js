import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
    name: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Olá Mundo!";
    },
    name: () => {
      return "Daniel Silva";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4004).then(({ url }) => {
  console.log(url);
});
