import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int
      average: Float
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '1asd978-9-a',
      name: () => 'Aline Martins',
      age: () => 32,
      average: () => 50.66,
      married: () => true,
      arrayString: () => ['aline', 'bruno'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
