import { gql } from 'apollo-server-core';

export const userTypeDefs = gql`
  extend type Query {
    user: String
    users: [User!]!
  }

  type User {
    id: ID!
    userName: String
  }
`;
