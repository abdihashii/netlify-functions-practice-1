const { ApolloServer } = require('apollo-server-lambda');

// Schema
const typeDefs = require('./graphql/schema');

// Resolvers
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler();
