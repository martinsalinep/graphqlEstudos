import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post: String
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
  }
`;
