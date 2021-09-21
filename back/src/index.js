const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// RESOLVERS
const resolvers = {
  Query: {
    info: () => `This is the API of Roundnet France Ranking`,
    ranking: async (parent, args, context) => {
      const ranking = await context.prisma.playerOnTournament.findMany({
        include: {
          player: true,
          team: true,
        },
        orderBy: [
          {
            points: 'desc',
          },
          {
            rank: 'asc',
          }
        ]
      });
      return ranking;
    }
  },
  // Mutation: {
  //   // Add Link
  //   post: (parent, args, context, info) => {
  //     const newLink = context.prisma.link.create({
  //       data: {
  //         url: args.url,
  //         description: args.description,
  //       }
  //     })
  //     return newLink;
  //   },
  // updateLink: (parent, args) => {
  //   const newLink = {
  //     id: args.id,
  //     description: args.description,
  //     url: args.url,
  //   };

  //   const index = links.findIndex(link => link.id === newLink.id);
  //   links[index] = newLink;
  //   return newLink;
  // },
  // deleteLink: (parent, args) => {
  //   const index = links.findIndex(link => link.id === args.id);
  //   if (index > -1) {
  //     links.splice(index, 1);
  //   }
  // },
  // },
}

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
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );