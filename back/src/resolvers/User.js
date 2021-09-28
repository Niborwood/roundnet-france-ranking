// USER RESOLVER

function tournaments(parent, args, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).tournaments();
}

function club(parent, args, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).club();
}

module.exports = {
  tournaments,
  club,
}