/* Node Package Imports */
import { ApolloServer } from 'apollo-server';

/* GraphQL Imports */
import resolvers from './resolvers'
import typeDefs from './schema'

/* Initialize Apollo Server */
const server = new ApolloServer({
  typeDefs,
  resolvers
});

/* Start Apollo Server */
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url} 🚀 `);
});
