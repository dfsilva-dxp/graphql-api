import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Customer {
    id: ID!
    name: String!
    email: String!
    age: Int!
    weight: Float!
    married: Boolean!
    date: String
  }

  type Query {
    currentDate: String!
    customer: Customer!
  }
`;

const resolvers = {
  Customer: {
    date: (customer) => {
      return new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
      }).format(customer.currentDate);
    }
  },
  Query: {
    currentDate: () => {
      const date = new Date();

      return new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
      }).format(date);
    },

    customer: () => {
      return {
        id: "uid-001",
        name: "Daniel Silva",
        email: "dfsilva.dxp@gmail.com",
        age: 34,
        weight: 88.9,
        married: true,
        currentDate: new Date()
      };
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
