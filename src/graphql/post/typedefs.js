import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFiltersInput): [Post!]!
  }

  union PostResult = PostNotFoundError | PostTimeOutError | Post

  interface PostError {
    statusCode: Int!
    message: String!
  }

  type PostNotFoundError implements PostError {
    statusCode: Int!
    message: String!
    postID: String!
  }

  type PostTimeOutError implements PostError {
    statusCode: Int!
    message: String!
    timeOut: Int!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    #userId: User!
    indexRef: Int!
    createdAt: String!
  }
`;
