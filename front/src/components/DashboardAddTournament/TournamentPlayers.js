import React, { useState } from 'react';
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
import TextField from '@mui/material/TextField';

// MUI ICONS IMPORTS
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// ---- TEAM ROW SUB-COMPONENT ----
function EmptyRow({ rank, playersValues, setPlayersValues }) {
  const initialValues = {
    team: '',
    players: [
      {
        name: '',
      },
      {
        name: '',
      },
    ],
  };

  return (
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="right" sx={{ maxWidth: '50px' }}>
        {rank}
      </TableCell>
      <TableCell>
        <TextField
          label="Nom d'équipe"
          id={`team-name-${rank}`}
          variant="filled"
          size="small"
          value={playersValues[rank]?.teamName}
          onChange={(newValue) => {
            setPlayersValues({
              ...playersValues,
              [rank]: {
                ...playersValues[rank],
                teamName: newValue.target.value,
              },
            });
          }}
        />

      </TableCell>
      <TableCell>
        <TextField
          label="Prénom, nom"
          id={`team-firstPlayer-${rank}`}
          variant="filled"
          size="small"
        />

      </TableCell>
      <TableCell>
        <TextField
          label="Prénom, nom"
          id={`team-secondPlayer-${rank}`}
          variant="filled"
          size="small"
        />

      </TableCell>
    </TableRow>
  );
}

EmptyRow.propTypes = {
  rank: PropTypes.number.isRequired,
  playersValues: PropTypes.arrayOf(PropTypes.shape({
    teamName: PropTypes.string,
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string,
  })).isRequired,
  setPlayersValues: PropTypes.func.isRequired,
};

// ---- TOURNAMENT PLAYERS COMPONENT ----
function TournamentPlayers({
  setDetailsStep, participants, playersValues, setPlayersValues,
}) {
  // Function to create as many empty rows as the number of participants
  const createEmptyRows = (numberOfRows) => {
    const rows = [];
    for (let i = 0; i < numberOfRows; i += 1) {
      const rank = i + 1;
      rows.push(
        <EmptyRow
          key={rank}
          rank={rank}
          playersValues={playersValues}
          setPlayersValues={setPlayersValues}
        />,
      );
    }
    return rows;
  };

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
              <TableCell align="right" sx={{ maxWidth: '50px' }}>Rang</TableCell>
              <TableCell align="left">Equipe</TableCell>
              <TableCell>Joueur 1</TableCell>
              <TableCell>Joueur 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {createEmptyRows(participants).map((row) => row)}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

TournamentPlayers.propTypes = {
  setDetailsStep: PropTypes.func.isRequired,
  participants: PropTypes.number.isRequired,
  playersValues: PropTypes.arrayOf(PropTypes.shape({
    teamName: PropTypes.string,
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string,
  })).isRequired,
  setPlayersValues: PropTypes.func.isRequired,
};

export default TournamentPlayers;
