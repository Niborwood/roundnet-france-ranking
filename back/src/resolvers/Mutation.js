// MUTATION RESOLVERS

// JWT IMPORTS
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { APP_SECRET, getUserId } = require('../utils');

// CREATING A NEW USER
async function signup(parent, args, context, info) {
  // Hashing the user's UID (acting as a password)
  const uid = await bcrypt.hash(args.uid, 10);

  // Create the user
  const user = await context.prisma.user.create({
    data: {
      uid,
      email: args.email,
      name: args.name,
      club: {
        connectOrCreate: {
          where: {
            name: args.club
          },
          create: {
            name: args.club
          }
        }
      }
    },
  });

  // Assign a JWT token to the user
  const token = jwt.sign({ userId: user.uid }, APP_SECRET)

  // Return the token and the user for the AuthPayload type
  return {
    token,
    user,
  }
}

// LOGIN A USER
async function login(parent, args, context, info) {
  // Retrieve the user based on the email
  const user = await context.prisma.user.findUnique({ where: { email: args.email } })
  if (!user) {
    throw new Error('Aucun utilisateur n\'a été trouvé')
  }


  // Checking if the UID/password is correct
  const valid = await bcrypt.compare(args.uid, user.uid);
  if (!valid) {
    throw new Error('Le mot de passe est incorrect')
  }

  // Assign a JWT token to the user
  const token = jwt.sign({ userId: user.uid }, APP_SECRET)

  return {
    token,
    user,
  }
}

// CREATE A TOURNAMENT
const createTournament = async (parent, args, context, info) => {
  // Checking if the user is logged in ; if not, throw an error
  const { userId } = context;
  if (!userId) {
    throw new Error('Vous devez être connecté pour créer un tournoi')
  }

  // Checking if user has permission to create a tournament
  const userIsReadonly = await context.prisma.user.findUnique({ where: { uid: userId } }).role.includes('READONLY');
  console.log(isAuthorized);
  if (userIsReadonly) {
    throw new Error('Vous n\'avez pas les droits pour créer un tournoi')
  }

  // If logged in :
  // Retrieve the place where the tournament has been held
  const { id: placeId } = await context.prisma.place.findFirst({
    where: {
      name: args.place
    }
  });

  // Create the tournament without players
  const tournament = await context.prisma.tournament.create({
    data: {
      name: args.name,
      date: args.date,
      participants: args.participants,
      admin: { connect: { uid: userId } },
      place: {
        connectOrCreate: {
          where: {
            id: placeId
          },
          create: {
            name: args.place
          }
        }
      },
      }
    });

  return tournament;
}

module.exports = {
  signup,
  login,
  createTournament,
}