// IMPORTS
const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// RESOLVERS
const Query = require('../resolvers/Query');

const resolvers = {
  Query,
};

// SERVER
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: {
    prisma,
  }
})

// LAUNCH SERVER
server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) =>
    console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `)
  );