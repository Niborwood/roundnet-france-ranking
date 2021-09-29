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

// Get all users (only for ADMIN role)
const users = async (parent, args, context) => {
  const { userId } = context;
  if (!userId) {
    throw new Error('Vous devez être connecté pour obtenir ces informations');
  }

  const { role } = await context.prisma.user.findUnique({ where: { uid: userId } });
  const userIsSuperAdmin = role === 'ADMIN';
  if (!userIsSuperAdmin) {
    throw new Error('Vous n\'avez pas les droits pour obtenir ces informations');
  }

  const users = await context.prisma.user.findMany();
  return users;
}

// Get specific user
const user = async (parent, args, context) => {
  const { userId } = context;
  if (!userId) {
    throw new Error('Vous devez être connecté pour obtenir ces informations');
  }

  const user = await context.prisma.user.findUnique({ where: { uid: userId } });
  if (!user) {
    throw new Error('Utilisateur inconnu. Veuillez vous connecter avec un autre compte.');
  }
  return user;
}


module.exports = {
  info,
  ranking,
  clubs,
  users,
  user,
};