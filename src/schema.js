import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs/typeDefs';
import resolvers from './resolvers/resovers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
