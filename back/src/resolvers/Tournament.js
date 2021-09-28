// TOURNAMENT RESOLVER

const admin = (parent, args, context) => {
  return context.prisma.tournament.findUnique({ 
    where: { id: parent.id } 
  }).admin();
}

const place = (parent, args, context) => {
  return context.prisma.tournament.findUnique({
    where: { id: parent.id }
  }).place();
}

const players = (parent, args, context) => {
  return context.prisma.playerOnTournament.findMany({
    where: { tournamentId: parent.tournamentId }
  }).players();
}

module.exports = {
  admin,
  place,
  players,
}
