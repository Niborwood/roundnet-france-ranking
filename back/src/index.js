// IMPORTS
const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// RESOLVERS
const resolvers = {
  Query: {
    // GENERAL API INFO
    info: () => `This is the API of Roundnet France Ranking`,

    // RANKING ALGORITHM
    ranking: async (parent, args, context) => {
      const rankingRaw = await context.prisma.playerOnTournament.groupBy({
        by: ['playerId'],
        _sum: {
          points: true,
        },
        orderBy: {
          _sum: {
            points: 'desc',
          }
        }
      });
    

      // Retrieving the player's info
      const playersData = await context.prisma.player.findMany();

      // Merging rankingRaw with playersData
      const ranking = rankingRaw.map((player, index) => {
        const playerInfo = playersData.find(p => p.id === player.playerId);
        return {
          playerId: player.playerId,
          points: player._sum.points,
          rank: index + 1,
          player: playerInfo,
        };
      });

      return ranking;
    },

    // GET CLUBS 
    clubs: async (parent, args, context) => {
      const clubs = await context.prisma.club.findMany({
        include: {
          players: true,
        },
      });
      return clubs;
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
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) =>
    console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `)
  );