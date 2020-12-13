const { ApolloServer } = require('apollo-server');

// Schema
const typeDefs = require('./graphql/schema');

// Resolvers
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
