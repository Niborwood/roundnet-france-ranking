const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const places = await prisma.place.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Paris',
    }
  });

  const openParis = await prisma.tournament.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Open de Paris',
      date: '2021-05-29',
      place: {
        connect: { id: 1 }
      },
      players: {
        create: [

          // LES JOUVE
          {
            rank: 1,
            points: 500,
            team: {
              connectOrCreate: {
                where: { name: 'Les Jouve' },
                create: { name: 'Les Jouve' }
              }
            },
            player: {
              create:
                { name: 'Louis', surname: 'Jouve' },
            },
          },
          {
            rank: 1,
            points: 500,
            team: {
              connectOrCreate: {
                where: { name: 'Les Jouve' },
                create: { name: 'Les Jouve' }
              }
            },
            player: {
              create:
                { name: 'Thomas', surname: 'Jouve' },
            },
          },

          // M&N
          {
            rank: 2,
            points: 320,
            team: {
              connectOrCreate: {
                where: { name: 'M&N' },
                create: { name: 'M&N' }
              }
            },
            player: {
              create:
                { name: 'Charles', surname: 'Mordacq' },
            },
          },
          {
            rank: 2,
            points: 320,
            team: {
              connectOrCreate: {
                where: { name: 'M&N' },
                create: { name: 'M&N' }
              }
            },
            player: {
              create:
                { name: 'Benoit', surname: 'Nguyen' },
            },
          },

          // DALA DALI DALO
          {
            rank: 3,
            points: 210,
            team: {
              connectOrCreate: {
                where: { name: 'Dala Dali Dalo' },
                create: { name: 'Dala Dali Dalo' }
              }
            },
            player: {
              create:
                { name: 'Dorian', surname: 'Améziane' },
            },
          },
          {
            rank: 3,
            points: 210,
            team: {
              connectOrCreate: {
                where: { name: 'Dala Dali Dalo' },
                create: { name: 'Dala Dali Dalo' }
              }
            },
            player: {
              create:
                { name: 'Cebastien', surname: 'Page' },
            },
          },

          // EQUINOX
          {
            rank: 4,
            points: 165,
            team: {
              connectOrCreate: {
                where: { name: 'Equinox' },
                create: { name: 'Equinox' }
              }
            },
            player: {
              create:
                { name: 'Robin', surname: 'Souriau' },
            },
          },
          {
            rank: 4,
            points: 165,
            team: {
              connectOrCreate: {
                where: { name: 'Equinox' },
                create: { name: 'Equinox' }
              }
            },
            player: {
              create:
                { name: 'Alexandre', surname: 'Marti' },
            },
          },
        ]
      }
    },
  });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })