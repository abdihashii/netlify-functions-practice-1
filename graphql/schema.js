const { gql } = require('apollo-server');

const typeDefs = gql`
  type Restaurant {
    id: Int
    name: String
    city: String
    price: String
  }

  type Query {
    restaurants: [Restaurant]
    restaurant(id: Int!): Restaurant
  }
`;

module.exports = typeDefs;
