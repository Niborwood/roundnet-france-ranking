// QUERY RESOLVER

// Get Info
const info = () => 'This is the API of Roundnet France Ranking';

// Get Ranking
const ranking = async (parent, args, context) => {
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
};

// Get Clubs
const clubs = async (parent, args, context) => {
  const clubs = await context.prisma.club.findMany({
    include: {
      members: true,
    },
  });
  return clubs;
}

const users = async (parent, args, context) => {
  const { userId } = context;
  if (!userId) {
    throw new Error('Vous devez être connecté pour obtenir ces informations');
  }

  const { role: userRole } = await context.prisma.user.findUnique({ where: { uid: userId } });
  const userIsSuperAdmin = userRole === 'SUPERADMIN';
  if (!userIsSuperAdmin) {
    throw new Error('Vous n\'avez pas les droits pour obtenir ces informations');
  }

  const users = await context.prisma.user.findMany();
  return users;
}


module.exports = {
  info,
  ranking,
  clubs,
  users,
};