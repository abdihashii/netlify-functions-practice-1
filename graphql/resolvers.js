// Our data set
const restaurantsDb = require('../db.json');
const restaurants = restaurantsDb.restaurants;

// Resolvers
const resolvers = {
  Query: {
    restaurants: () => restaurants,
    restaurant: (_, { id }) => {
      return restaurants.find((restaurant) => restaurant.id === id);
    },
  },
};

module.exports = resolvers;
