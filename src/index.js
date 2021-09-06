import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asdasd54312',
          userName: 'aline martins',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            userName: 'aline martins',
          },
          {
            id: '2',
            userName: 'aline martins',
          },
          {
            id: '3',
            userName: 'aline martins',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
