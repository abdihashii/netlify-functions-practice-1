const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
// const { ApolloServer } = require('apollo-server-lambda');

// Schema
const typeDefs = require('../graphql/schema');

// Resolvers
const resolvers = require('../graphql/resolvers');

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   playground: true,
//   introspection: true,
// });

// exports.handler = server.createHandler();

const PORT = 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

server.applyMiddleware({
  app,
  cors: {
    origin: '*',
    credentials: true,
  },
});

exports.handler = server.createHandler();

// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`);
// });
