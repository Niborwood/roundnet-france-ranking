import React from 'react';
import PropTypes from 'prop-types';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// MUI ICONS IMPORTS
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const betterRows = [
  {
    rank: 1,
    team: 'Equinox',
    players: [
      {
        name: 'Robin',
        surname: 'Souriau',
      },
      {
        name: 'Alexandre',
        surname: 'Marti',
      },
    ],
  },
  {
    rank: 2,
    team: 'M&N',
    players: [
      {
        name: 'Charles',
        surname: 'Mordacq',
      },
      {
        name: 'Benoit',
        surname: 'Nguyen',
      },
    ],
  },
  {
    rank: 3,
    team: 'Pour Combien ?',
    players: [
      {
        name: 'Dorian',
        surname: 'Améziane',
      },
      {
        name: 'Robin',
        surname: 'Florinda',
      },
    ],
  },
];

function TournamentPlayers({ setDetailsStep }) {
  return (
    <Container maxWidth="xl">
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>

        <Button
          color="primary"
          onClick={() => {
            setDetailsStep(true);
          }}
          startIcon={<ArrowBackIosNewIcon />}
        >
          Modifier les détails
        </Button>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Créer un tournoi / Ajouter des joueurs
        </Typography>

      </Stack>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="Joueurs à enregistrer" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ maxWidth: '70px' }}>Rang</TableCell>
              <TableCell align="left">Equipe</TableCell>
              <TableCell>Joueurs</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {betterRows.map((row) => (

              <TableRow
                hover
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ maxWidth: '70px' }}>
                  {row.rank}
                </TableCell>
                <TableCell>{row.team}</TableCell>
                {row.players.map((player) => (
                  <>
                    <TableCell key={player.name}>
                      {player.name}
                      {' '}
                      {player.surname}
                    </TableCell>
                  </>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

TournamentPlayers.propTypes = {
  setDetailsStep: PropTypes.func.isRequired,
};

export default TournamentPlayers;
