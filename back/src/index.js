// IMPORTS
const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { getUserId } = require('./utils');


// RESOLVERS
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Tournament = require('./resolvers/Tournament');
const Club = require('./resolvers/Club');

const resolvers = {
  Query,
  Mutation,
  User,
  Tournament,
  Club
};

// SERVER
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
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