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

function createData(name, calories, fat, carbs, protein) {
  return {
    name, calories, fat, carbs, protein,
  };
}

const rows = [
  createData(1, 'Robin', 'Souriau', 'Equinox'),
  createData(1, 'Alexandre', 'Marti', 'Equinox'),
  createData(2, 'Benoit', 'Nguyen', 'M&N'),
  createData(2, 'Charles', 'Mordacq', 'M&N'),
  createData(3, 'Dorian', 'Améziane', 'Pour Combien ?'),
  createData(3, 'Robin', 'Florinda', 'Pour Combien ?'),
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
              <TableCell align="left">Rang</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Equipe</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover
                key={row.fat}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-of-type(odd)': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
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
