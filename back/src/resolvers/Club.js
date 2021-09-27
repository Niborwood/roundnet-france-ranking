// CLUB RESOLVER

const members = async (parent, args, context) => {
  const members = await context.prisma.club.findUnique({ 
    where: { id: parent.id } 
  }).members();
  return members;
}

module.exports = {
  members
}