// CLUB RESOLVER

const members = async (parent, args, context) => {
  const members = await context.prisma.club.findUnique({ 
    where: { id: parent.id } 
  }).members();
  return members;
}

const admins = async (parent, args, context) => {
  const admins = await context.prisma.club.findUnique({
    where: { id: parent.id }
  }).admins();
  return admins;
}

module.exports = {
  members,
  admins
}