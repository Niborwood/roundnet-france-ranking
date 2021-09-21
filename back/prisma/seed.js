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
      participants: 64,
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

          // Here & Now
          {
            rank: 5,
            points: 110,
            team: {
              connectOrCreate: {
                where: { name: 'Here & Now' },
                create: { name: 'Here & Now' }
              }
            },
            player: {
              create:
                { name: 'Nicolas', surname: 'Brun' },
            },
          },
          {
            rank: 5,
            points: 110,
            team: {
              connectOrCreate: {
                where: { name: 'Here & Now' },
                create: { name: 'Here & Now' }
              }
            },
            player: {
              create:
                { name: 'Tristan', surname: 'Olin' },
            },
          },

          // Algèbre Linéaire
          {
            rank: 6,
            points: 109,
            team: {
              connectOrCreate: {
                where: { name: 'Algèbre Linéaire' },
                create: { name: 'Algèbre Linéaire' }
              }
            },
            player: {
              create:
                { name: 'Jean', surname: 'Delloye' },
            },
          },
          {
            rank: 6,
            points: 109,
            team: {
              connectOrCreate: {
                where: { name: 'Algèbre Linéaire' },
                create: { name: 'Algèbre Linéaire' }
              }
            },
            player: {
              create:
                { name: 'Timothée', surname: 'Dunglas' },
            },
          },

          // Happy Feet
          {
            rank: 7,
            points: 108,
            team: {
              connectOrCreate: {
                where: { name: 'Happy Feet' },
                create: { name: 'Happy Feet' }
              }
            },
            player: {
              create:
                { name: 'Jan-Peter', surname: 'Geringer' },
            },
          },
          {
            rank: 7,
            points: 108,
            team: {
              connectOrCreate: {
                where: { name: 'Happy Feet' },
                create: { name: 'Happy Feet' }
              }
            },
            player: {
              create:
                { name: 'Lancelot', surname: 'Touzé' },
            },
          },

          // Deux - Cognito
          {
            rank: 8,
            points: 107,
            team: {
              connectOrCreate: {
                where: { name: 'Deux - Cognito' },
                create: { name: 'Deux - Cognito' }
              }
            },
            player: {
              create:
                { name: 'Axel', surname: 'Degiorgis' },
            },
          },
          {
            rank: 8,
            points: 107,
            team: {
              connectOrCreate: {
                where: { name: 'Deux - Cognito' },
                create: { name: 'Deux - Cognito' }
              }
            },
            player: {
              create:
                { name: 'Benoît', surname: 'Durand' },
            },
          },

          // Spike Boules
          {
            rank: 9,
            points: 70,
            team: {
              connectOrCreate: {
                where: { name: 'Spike Boules' },
                create: { name: 'Spike Boules' }
              }
            },
            player: {
              create:
                { name: 'Erwan', surname: 'Chapelière' },
            },
          },
          {
            rank: 9,
            points: 70,
            team: {
              connectOrCreate: {
                where: { name: 'Spike Boules' },
                create: { name: 'Spike Boules' }
              }
            },
            player: {
              create:
                { name: 'Valentin', surname: 'Perraud' },
            },
          },

          // Tac Tac
          {
            rank: 10,
            points: 69,
            team: {
              connectOrCreate: {
                where: { name: 'Tac Tac' },
                create: { name: 'Tac Tac' }
              }
            },
            player: {
              create:
                { name: 'Ryan', surname: 'Danekas' },
            },
          },
          {
            rank: 10,
            points: 69,
            team: {
              connectOrCreate: {
                where: { name: 'Tac Tac' },
                create: { name: 'Tac Tac' }
              }
            },
            player: {
              create:
                { name: 'Gabriel', surname: 'Rodriguez' },
            },
          },

          // Les Lillois
          {
            rank: 11,
            points: 68,
            team: {
              connectOrCreate: {
                where: { name: 'Les Lillois' },
                create: { name: 'Les Lillois' }
              }
            },
            player: {
              create:
                { name: 'Adrien', surname: 'Bernaert' },
            },
          },
          {
            rank: 11,
            points: 68,
            team: {
              connectOrCreate: {
                where: { name: 'Les Lillois' },
                create: { name: 'Les Lillois' }
              }
            },
            player: {
              create:
                { name: 'Augustin', surname: 'Rabec' },
            },
          },

          // A Samedi Prochain Chantal
          {
            rank: 12,
            points: 67,
            team: {
              connectOrCreate: {
                where: { name: 'A Samedi Prochain Chantal' },
                create: { name: 'A Samedi Prochain Chantal' }
              }
            },
            player: {
              create:
                { name: 'Warren', surname: 'Coopman' },
            },
          },
          {
            rank: 12,
            points: 67,
            team: {
              connectOrCreate: {
                where: { name: 'A Samedi Prochain Chantal' },
                create: { name: 'A Samedi Prochain Chantal' }
              }
            },
            player: {
              create:
                { name: 'Kevin', surname: 'Jones' },
            },
          },

          // Spike CS
          {
            rank: 13,
            points: 66,
            team: {
              connectOrCreate: {
                where: { name: 'Spike CS' },
                create: { name: 'Spike CS' }
              }
            },
            player: {
              create:
                { name: 'Tanguy', surname: 'De Fenoyl' },
            },
          },
          {
            rank: 13,
            points: 66,
            team: {
              connectOrCreate: {
                where: { name: 'Spike CS' },
                create: { name: 'Spike CS' }
              }
            },
            player: {
              create:
                { name: 'Xavier', surname: 'Bodard' },
            },
          },

          // SpikeBees
          {
            rank: 14,
            points: 65,
            team: {
              connectOrCreate: {
                where: { name: 'SpikeBees' },
                create: { name: 'SpikeBees' }
              }
            },
            player: {
              create:
                { name: 'Baptiste', surname: 'Maison' },
            },
          },
          {
            rank: 14,
            points: 65,
            team: {
              connectOrCreate: {
                where: { name: 'SpikeBees' },
                create: { name: 'SpikeBees' }
              }
            },
            player: {
              create:
                { name: 'Paul', surname: 'Dengreville' },
            },
          },

          // YaGo
          {
            rank: 15,
            points: 64,
            team: {
              connectOrCreate: {
                where: { name: 'YaGo' },
                create: { name: 'YaGo' }
              }
            },
            player: {
              create:
                { name: 'Hugo', surname: 'Valette' },
            },
          },
          {
            rank: 15,
            points: 64,
            team: {
              connectOrCreate: {
                where: { name: 'YaGo' },
                create: { name: 'YaGo' }
              }
            },
            player: {
              create:
                { name: 'Yannick', surname: 'Secqueville' },
            },
          },

          // Les Olympiques
          {
            rank: 16,
            points: 63,
            team: {
              connectOrCreate: {
                where: { name: 'Les Olympiques' },
                create: { name: 'Les Olympiques' }
              }
            },
            player: {
              create:
                { name: 'Timothée', surname: 'Boulet' },
            },
          },
          {
            rank: 16,
            points: 63,
            team: {
              connectOrCreate: {
                where: { name: 'Les Olympiques' },
                create: { name: 'Les Olympiques' }
              }
            },
            player: {
              create:
                { name: 'Nicolas', surname: 'Tastevin' },
            },
          },

          // CRC
          {
            rank: 17,
            points: 45,
            team: {
              connectOrCreate: {
                where: { name: 'CRC' },
                create: { name: 'CRC' }
              }
            },
            player: {
              create:
                { name: 'Cyril', surname: 'Douady' },
            },
          },
          {
            rank: 17,
            points: 45,
            team: {
              connectOrCreate: {
                where: { name: 'CRC' },
                create: { name: 'CRC' }
              }
            },
            player: {
              create:
                { name: 'Pierre', surname: 'De Chambure' },
            },
          },

          // Spy'Branques
          {
            rank: 18,
            points: 44,
            team: {
              connectOrCreate: {
                where: { name: 'Spy\'Branques' },
                create: { name: 'Spy\'Branques' }
              }
            },
            player: {
              create:
                { name: 'Théo', surname: 'Camboulives' },
            },
          },
          {
            rank: 18,
            points: 44,
            team: {
              connectOrCreate: {
                where: { name: 'Spy\'Branques' },
                create: { name: 'Spy\'Branques' }
              }
            },
            player: {
              create:
                { name: 'Maxence', surname: 'Fréchou' },
            },
          },

          // Born To Spike
          {
            rank: 19,
            points: 165,
            team: {
              connectOrCreate: {
                where: { name: 'Born To Spike' },
                create: { name: 'Born To Spike' }
              }
            },
            player: {
              create:
                { name: 'Eric', surname: 'Dariel' },
            },
          },
          {
            rank: 19,
            points: 165,
            team: {
              connectOrCreate: {
                where: { name: 'Born To Spike' },
                create: { name: 'Born To Spike' }
              }
            },
            player: {
              create:
                { name: 'Adrien', surname: 'Fayolle' },
            },
          },

          // C'est mon choix
          {
            rank: 20,
            points: 42,
            team: {
              connectOrCreate: {
                where: { name: 'C\'est mon choix' },
                create: { name: 'C\'est mon choix' }
              }
            },
            player: {
              create:
                { name: 'Maxime', surname: 'Desvallées' },
            },
          },
          {
            rank: 20,
            points: 42,
            team: {
              connectOrCreate: {
                where: { name: 'C\'est mon choix' },
                create: { name: 'C\'est mon choix' }
              }
            },
            player: {
              create:
                { name: 'Jules', surname: 'Messaut' },
            },
          },

          // RPTV Club
          {
            rank: 21,
            points: 41,
            team: {
              connectOrCreate: {
                where: { name: 'RPTV Club' },
                create: { name: 'RPTV Club' }
              }
            },
            player: {
              create:
                { name: 'Maxime', surname: 'Roger' },
            },
          },
          {
            rank: 21,
            points: 41,
            team: {
              connectOrCreate: {
                where: { name: 'RPTV Club' },
                create: { name: 'RPTV Club' }
              }
            },
            player: {
              create:
                { name: 'Nils', surname: 'Legeay' },
            },
          },

          // Aigoual Spikers
          {
            rank: 22,
            points: 40,
            team: {
              connectOrCreate: {
                where: { name: 'Aigoual Spikers' },
                create: { name: 'Aigoual Spikers' }
              }
            },
            player: {
              create:
                { name: 'Etienne', surname: 'De Chambost' },
            },
          },
          {
            rank: 22,
            points: 40,
            team: {
              connectOrCreate: {
                where: { name: 'Aigoual Spikers' },
                create: { name: 'Aigoual Spikers' }
              }
            },
            player: {
              create:
                { name: 'Guillaume', surname: 'Angliviel' },
            },
          },

          // Spiketis
          {
            rank: 23,
            points: 39,
            team: {
              connectOrCreate: {
                where: { name: 'Spiketis' },
                create: { name: 'Spiketis' }
              }
            },
            player: {
              create:
                { name: 'Alex', surname: 'Hostachy' },
            },
          },
          {
            rank: 23,
            points: 39,
            team: {
              connectOrCreate: {
                where: { name: 'Spiketis' },
                create: { name: 'Spiketis' }
              }
            },
            player: {
              create:
                { name: 'Guillaume', surname: 'Malepate' },
            },
          },

          // JABS
          {
            rank: 24,
            points: 38,
            team: {
              connectOrCreate: {
                where: { name: 'JABS' },
                create: { name: 'JABS' }
              }
            },
            player: {
              create:
                { name: 'Benjamin', surname: 'Arbault' },
            },
          },
          {
            rank: 24,
            points: 38,
            team: {
              connectOrCreate: {
                where: { name: 'JABS' },
                create: { name: 'JABS' }
              }
            },
            player: {
              create:
                { name: 'Jeremy', surname: 'Lazimi' },
            },
          },

          // Les Gauchers
          {
            rank: 25,
            points: 37,
            team: {
              connectOrCreate: {
                where: { name: 'Les Gauchers' },
                create: { name: 'Les Gauchers' }
              }
            },
            player: {
              create:
                { name: 'Thibaud', surname: 'Labourdette' },
            },
          },
          {
            rank: 25,
            points: 37,
            team: {
              connectOrCreate: {
                where: { name: 'Les Gauchers' },
                create: { name: 'Les Gauchers' }
              }
            },
            player: {
              create:
                { name: 'Anaïs', surname: 'Duport' },
            },
          },

          // La Teama Precissione
          {
            rank: 26,
            points: 36,
            team: {
              connectOrCreate: {
                where: { name: 'La Teama Precissione' },
                create: { name: 'La Teama Precissione' }
              }
            },
            player: {
              create:
                { name: 'Hugues', surname: 'Benoist' },
            },
          },
          {
            rank: 26,
            points: 36,
            team: {
              connectOrCreate: {
                where: { name: 'La Teama Precissione' },
                create: { name: 'La Teama Precissione' }
              }
            },
            player: {
              create:
                { name: 'Maximilien', surname: 'Thidet' },
            },
          },

          // La Mala-Gang
          {
            rank: 28,
            points: 34,
            team: {
              connectOrCreate: {
                where: { name: 'La Mala-Gang' },
                create: { name: 'La Mala-Gang' }
              }
            },
            player: {
              create:
                { name: 'Antonin', surname: 'Bexon' },
            },
          },
          {
            rank: 28,
            points: 34,
            team: {
              connectOrCreate: {
                where: { name: 'La Mala-Gang' },
                create: { name: 'La Mala-Gang' }
              }
            },
            player: {
              create:
                { name: 'Gianni', surname: 'Pozzan' },
            },
          },

          // Le Cabinet!
          {
            rank: 29,
            points: 33,
            team: {
              connectOrCreate: {
                where: { name: 'Le Cabinet!' },
                create: { name: 'Le Cabinet!' }
              }
            },
            player: {
              create:
                { name: 'Erwan', surname: 'Crestel' },
            },
          },
          {
            rank: 29,
            points: 33,
            team: {
              connectOrCreate: {
                where: { name: 'Le Cabinet!' },
                create: { name: 'Le Cabinet!' }
              }
            },
            player: {
              create:
                { name: 'Mathieu', surname: '?' },
            },
          },

          // JoTo
          {
            rank: 30,
            points: 32,
            team: {
              connectOrCreate: {
                where: { name: 'JoTo' },
                create: { name: 'JoTo' }
              }
            },
            player: {
              create:
                { name: 'Thomas', surname: 'Vicaire' },
            },
          },
          {
            rank: 30,
            points: 32,
            team: {
              connectOrCreate: {
                where: { name: 'JoTo' },
                create: { name: 'JoTo' }
              }
            },
            player: {
              create:
                { name: 'Joris', surname: 'Harou' },
            },
          },

          // Team Pinouz
          {
            rank: 31,
            points: 31,
            team: {
              connectOrCreate: {
                where: { name: 'Team Pinouz' },
                create: { name: 'Team Pinouz' }
              }
            },
            player: {
              create:
                { name: 'Florian', surname: 'Vaudeleau' },
            },
          },
          {
            rank: 31,
            points: 31,
            team: {
              connectOrCreate: {
                where: { name: 'Team Pinouz' },
                create: { name: 'Team Pinouz' }
              }
            },
            player: {
              create:
                { name: 'Alexis', surname: 'Picard' },
            },
          },

          // Taff & Taff
          {
            rank: 32,
            points: 30,
            team: {
              connectOrCreate: {
                where: { name: 'Taff & Taff' },
                create: { name: 'Taff & Taff' }
              }
            },
            player: {
              create:
                { name: 'Clément', surname: 'Martin' },
            },
          },
          {
            rank: 32,
            points: 30,
            team: {
              connectOrCreate: {
                where: { name: 'Taff & Taff' },
                create: { name: 'Taff & Taff' }
              }
            },
            player: {
              create:
                { name: 'Alma', surname: 'Galland' },
            },
          },

          // Le Bek Dans Lo
          {
            rank: 33,
            points: 29,
            team: {
              connectOrCreate: {
                where: { name: 'Le Bek Dans Lo' },
                create: { name: 'Le Bek Dans Lo' }
              }
            },
            player: {
              create:
                { name: 'Laurent', surname: 'Mansera' },
            },
          },
          {
            rank: 33,
            points: 29,
            team: {
              connectOrCreate: {
                where: { name: 'Le Bek Dans Lo' },
                create: { name: 'Le Bek Dans Lo' }
              }
            },
            player: {
              create:
                { name: 'Romain', surname: 'Morel' },
            },
          },

          // Crusaders
          {
            rank: 34,
            points: 28,
            team: {
              connectOrCreate: {
                where: { name: 'Crusaders' },
                create: { name: 'Crusaders' }
              }
            },
            player: {
              create:
                { name: 'Wallerand', surname: 'De Francqueville' },
            },
          },
          {
            rank: 34,
            points: 28,
            team: {
              connectOrCreate: {
                where: { name: 'Crusaders' },
                create: { name: 'Crusaders' }
              }
            },
            player: {
              create:
                { name: 'Gabriel', surname: 'Curis' },
            },
          },

          // Abysse-Abysse
          {
            rank: 35,
            points: 27,
            team: {
              connectOrCreate: {
                where: { name: 'Abysse-Abysse' },
                create: { name: 'Abysse-Abysse' }
              }
            },
            player: {
              create:
                { name: 'Abel', surname: 'Galland' },
            },
          },
          {
            rank: 35,
            points: 27,
            team: {
              connectOrCreate: {
                where: { name: 'Abysse-Abysse' },
                create: { name: 'Abysse-Abysse' }
              }
            },
            player: {
              create:
                { name: 'Roxanne', surname: 'Vals' },
            },
          },

          // Le mec et le frère de Nadia
          {
            rank: 36,
            points: 26,
            team: {
              connectOrCreate: {
                where: { name: 'Le mec et le frère de Nadia' },
                create: { name: 'Le mec et le frère de Nadia' }
              }
            },
            player: {
              create:
                { name: 'Pierre-Louis', surname: 'Allain' },
            },
          },
          {
            rank: 36,
            points: 26,
            team: {
              connectOrCreate: {
                where: { name: 'Le mec et le frère de Nadia' },
                create: { name: 'Le mec et le frère de Nadia' }
              }
            },
            player: {
              create:
                { name: 'Ali', surname: 'Elamrani' },
            },
          },

          // Bedzir du Mexique
          {
            rank: 37,
            points: 25,
            team: {
              connectOrCreate: {
                where: { name: 'Bedzir du Mexique' },
                create: { name: 'Bedzir du Mexique' }
              }
            },
            player: {
              create:
                { name: 'Victor', surname: 'Bakache' },
            },
          },
          {
            rank: 37,
            points: 25,
            team: {
              connectOrCreate: {
                where: { name: 'Bedzir du Mexique' },
                create: { name: 'Bedzir du Mexique' }
              }
            },
            player: {
              create:
                { name: 'Antoine', surname: 'Burgaud' },
            },
          },

          // Gardien de Musée
          {
            rank: 38,
            points: 24,
            team: {
              connectOrCreate: {
                where: { name: 'Gardien de Musée' },
                create: { name: 'Gardien de Musée' }
              }
            },
            player: {
              create:
                { name: 'Pleinet', surname: 'Marin' },
            },
          },
          {
            rank: 38,
            points: 24,
            team: {
              connectOrCreate: {
                where: { name: 'Gardien de Musée' },
                create: { name: 'Gardien de Musée' }
              }
            },
            player: {
              create:
                { name: 'Treilles', surname: 'Eliott' },
            },
          },

          // Le chii
          {
            rank: 39,
            points: 23,
            team: {
              connectOrCreate: {
                where: { name: 'Le chii' },
                create: { name: 'Le chii' }
              }
            },
            player: {
              create:
                { name: 'Lucas', surname: 'Beal' },
            },
          },
          {
            rank: 39,
            points: 23,
            team: {
              connectOrCreate: {
                where: { name: 'Le chii' },
                create: { name: 'Le chii' }
              }
            },
            player: {
              create:
                { name: 'Kevin', surname: 'Piry' },
            },
          },

          // Les jaunes
          {
            rank: 40,
            points: 22,
            team: {
              connectOrCreate: {
                where: { name: 'Les jaunes' },
                create: { name: 'Les jaunes' }
              }
            },
            player: {
              create:
                { name: 'Juliette', surname: 'Dufourcq' },
            },
          },
          {
            rank: 40,
            points: 22,
            team: {
              connectOrCreate: {
                where: { name: 'Les jaunes' },
                create: { name: 'Les jaunes' }
              }
            },
            player: {
              create:
                { name: 'Théophile', surname: 'Pomies' },
            },
          },

          // La Meute
          {
            rank: 41,
            points: 21,
            team: {
              connectOrCreate: {
                where: { name: 'La Meute' },
                create: { name: 'La Meute' }
              }
            },
            player: {
              create:
                { name: 'Laurent', surname: 'Ducord' },
            },
          },
          {
            rank: 41,
            points: 21,
            team: {
              connectOrCreate: {
                where: { name: 'La Meute' },
                create: { name: 'La Meute' }
              }
            },
            player: {
              create:
                { name: 'Thomas', surname: 'Faidix' },
            },
          },

          // Team Potos Ekambi
          {
            rank: 42,
            points: 20,
            team: {
              connectOrCreate: {
                where: { name: 'Team Potos Ekambi' },
                create: { name: 'Team Potos Ekambi' }
              }
            },
            player: {
              create:
                { name: 'Fabien', surname: 'Devaud' },
            },
          },
          {
            rank: 42,
            points: 20,
            team: {
              connectOrCreate: {
                where: { name: 'Team Potos Ekambi' },
                create: { name: 'Team Potos Ekambi' }
              }
            },
            player: {
              create:
                { name: 'Antoine', surname: 'Aboulkheir' },
            },
          },

          // Moudjou
          {
            rank: 43,
            points: 19,
            team: {
              connectOrCreate: {
                where: { name: 'Moudjou' },
                create: { name: 'Moudjou' }
              }
            },
            player: {
              create:
                { name: 'Killian', surname: 'Moutou' },
            },
          },
          {
            rank: 43,
            points: 19,
            team: {
              connectOrCreate: {
                where: { name: 'Moudjou' },
                create: { name: 'Moudjou' }
              }
            },
            player: {
              create:
                { name: 'Sofiane', surname: 'Djoulait' },
            },
          },

          // Noudeu
          {
            rank: 44,
            points: 18,
            team: {
              connectOrCreate: {
                where: { name: 'Noudeu' },
                create: { name: 'Noudeu' }
              }
            },
            player: {
              create:
                { name: 'Sébastien', surname: 'Lefèvre' },
            },
          },
          {
            rank: 44,
            points: 18,
            team: {
              connectOrCreate: {
                where: { name: 'Noudeu' },
                create: { name: 'Noudeu' }
              }
            },
            player: {
              create:
                { name: 'Cynthia', surname: 'Mangeney' },
            },
          },

          // Toto et Lolo
          {
            rank: 45,
            points: 17,
            team: {
              connectOrCreate: {
                where: { name: 'Toto et Lolo' },
                create: { name: 'Toto et Lolo' }
              }
            },
            player: {
              create:
                { name: 'Alexis', surname: 'Galland' },
            },
          },
          {
            rank: 45,
            points: 17,
            team: {
              connectOrCreate: {
                where: { name: 'Toto et Lolo' },
                create: { name: 'Toto et Lolo' }
              }
            },
            player: {
              create:
                { name: 'Chloé', surname: 'Simpson' },
            },
          },

          // Les Juju's 93
          {
            rank: 46,
            points: 16,
            team: {
              connectOrCreate: {
                where: { name: 'Les Juju\'s 93' },
                create: { name: 'Les Juju\'s 93' }
              }
            },
            player: {
              create:
                { name: 'Julien', surname: 'Lessi' },
            },
          },
          {
            rank: 46,
            points: 16,
            team: {
              connectOrCreate: {
                where: { name: 'Les Juju\'s 93' },
                create: { name: 'Les Juju\'s 93' }
              }
            },
            player: {
              create:
                { name: 'Julien', surname: 'Cheminade' },
            },
          },

          // Les frérots
          {
            rank: 47,
            points: 15,
            team: {
              connectOrCreate: {
                where: { name: 'Les frérots' },
                create: { name: 'Les frérots' }
              }
            },
            player: {
              create:
                { name: 'Quintiliano', surname: 'Harrington' },
            },
          },
          {
            rank: 47,
            points: 15,
            team: {
              connectOrCreate: {
                where: { name: 'Les frérots' },
                create: { name: 'Les frérots' }
              }
            },
            player: {
              create:
                { name: 'Max', surname: 'Harrington' },
            },
          },

          // Monsieur Seguin et sa chèvre
          {
            rank: 48,
            points: 14,
            team: {
              connectOrCreate: {
                where: { name: 'Monsieur Seguin et sa chèvre' },
                create: { name: 'Monsieur Seguin et sa chèvre' }
              }
            },
            player: {
              create:
                { name: 'Gauthier', surname: 'Forterre' },
            },
          },
          {
            rank: 48,
            points: 14,
            team: {
              connectOrCreate: {
                where: { name: 'Monsieur Seguin et sa chèvre' },
                create: { name: 'Monsieur Seguin et sa chèvre' }
              }
            },
            player: {
              create:
                { name: 'Niklas', surname: 'Lange' },
            },
          },

          // Charlemagne
          {
            rank: 49,
            points: 13,
            team: {
              connectOrCreate: {
                where: { name: 'Charlemagne' },
                create: { name: 'Charlemagne' }
              }
            },
            player: {
              create:
                { name: 'Eric', surname: 'Laayadi' },
            },
          },
          {
            rank: 49,
            points: 13,
            team: {
              connectOrCreate: {
                where: { name: 'Charlemagne' },
                create: { name: 'Charlemagne' }
              }
            },
            player: {
              create:
                { name: 'Niklas', surname: 'Lange' },
            },
          },

          // Les bronzés font du spike
          {
            rank: 50,
            points: 12,
            team: {
              connectOrCreate: {
                where: { name: 'Les bronzés font du spike' },
                create: { name: 'Les bronzés font du spike' }
              }
            },
            player: {
              create:
                { name: 'Didier', surname: 'Franque' },
            },
          },
          {
            rank: 50,
            points: 12,
            team: {
              connectOrCreate: {
                where: { name: 'Les bronzés font du spike' },
                create: { name: 'Les bronzés font du spike' }
              }
            },
            player: {
              create:
                { name: 'Guillaume', surname: 'Rossignol' },
            },
          },

          // Les tacticiens
          {
            rank: 51,
            points: 11,
            team: {
              connectOrCreate: {
                where: { name: 'Les tacticiens' },
                create: { name: 'Les tacticiens' }
              }
            },
            player: {
              create:
                { name: 'Matthieu', surname: 'Gautrot' },
            },
          },
          {
            rank: 51,
            points: 11,
            team: {
              connectOrCreate: {
                where: { name: 'Les tacticiens' },
                create: { name: 'Les tacticiens' }
              }
            },
            player: {
              create:
                { name: 'Matteo', surname: 'Nottaris' },
            },
          },

          // Funky Ducks
          {
            rank: 52,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Funky Ducks' },
                create: { name: 'Funky Ducks' }
              }
            },
            player: {
              create:
                { name: 'Tomas', surname: 'Raviolo' },
            },
          },
          {
            rank: 52,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Funky Ducks' },
                create: { name: 'Funky Ducks' }
              }
            },
            player: {
              create:
                { name: 'Paul', surname: 'Halphen' },
            },
          },

          // Les Zizi-potes
          {
            rank: 53,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les Zizi-potes' },
                create: { name: 'Les Zizi-potes' }
              }
            },
            player: {
              create:
                { name: 'Quentin', surname: 'Durand' },
            },
          },
          {
            rank: 53,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les Zizi-potes' },
                create: { name: 'Les Zizi-potes' }
              }
            },
            player: {
              create:
                { name: 'Adrien', surname: 'Giacone' },
            },
          },

          // Les Filous
          {
            rank: 54,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les Filous' },
                create: { name: 'Les Filous' }
              }
            },
            player: {
              create:
                { name: 'Antonin', surname: 'Tavernier' },
            },
          },
          {
            rank: 54,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les Filous' },
                create: { name: 'Les Filous' }
              }
            },
            player: {
              create:
                { name: 'Barthelemy', surname: 'Vernois' },
            },
          },

          // Delacroix Staff
          {
            rank: 55,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Delacroix Staff' },
                create: { name: 'Delacroix Staff' }
              }
            },
            player: {
              create:
                { name: 'Ella', surname: 'Richard' },
            },
          },
          {
            rank: 55,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Delacroix Staff' },
                create: { name: 'Delacroix Staff' }
              }
            },
            player: {
              create:
                { name: 'Dylan', surname: 'Quenon' },
            },
          },

          // Dinde Team
          {
            rank: 56,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Dinde Team' },
                create: { name: 'Dinde Team' }
              }
            },
            player: {
              create:
                { name: 'Corentin', surname: 'Ramos' },
            },
          },
          {
            rank: 56,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Dinde Team' },
                create: { name: 'Dinde Team' }
              }
            },
            player: {
              create:
                { name: 'Louis', surname: 'Aubert' },
            },
          },

          // 99
          {
            rank: 59,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: '99' },
                create: { name: '99' }
              }
            },
            player: {
              create:
                { name: 'Hedi', surname: 'Affane' },
            },
          },
          {
            rank: 59,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: '99' },
                create: { name: '99' }
              }
            },
            player: {
              create:
                { name: 'Maximilien', surname: 'Rios' },
            },
          },

          // BeesSpike
          {
            rank: 60,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'BeesSpike' },
                create: { name: 'BeesSpike' }
              }
            },
            player: {
              create:
                { name: 'Hugues', surname: 'Maison' },
            },
          },
          {
            rank: 60,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'BeesSpike' },
                create: { name: 'BeesSpike' }
              }
            },
            player: {
              create:
                { name: 'Clémence', surname: 'Riquier' },
            },
          },

          // Les touristes
          {
            rank: 61,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les touristes' },
                create: { name: 'Les touristes' }
              }
            },
            player: {
              create:
                { name: 'Guillaume', surname: 'Guébin' },
            },
          },
          {
            rank: 61,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les touristes' },
                create: { name: 'Les touristes' }
              }
            },
            player: {
              create:
                { name: 'Chloé', surname: 'Henningsen' },
            },
          },

          // CJ 93
          {
            rank: 62,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'CJ 93' },
                create: { name: 'CJ 93' }
              }
            },
            player: {
              create:
                { name: 'Juliette', surname: 'Gandit' },
            },
          },
          {
            rank: 62,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'CJ 93' },
                create: { name: 'CJ 93' }
              }
            },
            player: {
              create:
                { name: 'Camille', surname: 'Normand' },
            },
          },

          // Les p\'tits Bibi
          {
            rank: 63,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les p\'tits Bibi' },
                create: { name: 'Les p\'tits Bibi' }
              }
            },
            player: {
              create:
                { name: 'Lucie', surname: 'Recous' },
            },
          },
          {
            rank: 63,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les p\'tits Bibi' },
                create: { name: 'Les p\'tits Bibi' }
              }
            },
            player: {
              create:
                { name: 'Noémie', surname: 'Drivet' },
            },
          },

          // Les Fratés
          {
            rank: 64,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les Fratés' },
                create: { name: 'Les Fratés' }
              }
            },
            player: {
              create:
                { name: 'Jason', surname: 'Portal' },
            },
          },
          {
            rank: 64,
            points: 10,
            team: {
              connectOrCreate: {
                where: { name: 'Les Fratés' },
                create: { name: 'Les Fratés' }
              }
            },
            player: {
              create:
                { name: 'Ludwig', surname: 'Stehelin' },
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