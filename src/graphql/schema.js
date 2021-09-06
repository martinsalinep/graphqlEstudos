import { gql } from 'apollo-server-core';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedefs';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';

const rootTypeDefs = gql`
  type Query {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
};
export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
