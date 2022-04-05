import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    currentDate: String!
  }
`;

const resolvers = {
  Query: {
    currentDate: () => {
      const date = new Date();

      return new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
      }).format(date);
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
