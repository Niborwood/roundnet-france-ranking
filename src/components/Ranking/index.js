import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// MATERIAL ICONS
import EqualizerIcon from '@mui/icons-material/Equalizer';

function Ranking() {
  const rows = [
    {
      id: 1, player: 'Louis Jouve', points: 870,
    },
    {
      id: 2, player: 'Thomas Jouve', points: 802,
    },
    {
      id: 3, player: 'Charles Mordacq', points: 610,
    },
    {
      id: 4, player: 'Dorian Améziane', points: 580,
    },
    {
      id: 5, player: 'Benoit Nguyen', points: 469,
    },
    {
      id: 6, player: 'Erwan Chapelière', points: 430,
    },
    {
      id: 7, player: 'Benoît Durand', points: 369,
    },
    {
      id: 8, player: 'Robin Florinda', points: 286,
    },
    {
      id: 9, player: 'Juliette Dufourcq', points: 278,
    },
    {
      id: 10, player: 'Robin Souriau', points: 274,
    },
  ];

  return (
    <Container id="ranking" maxWidth="sm" sx={{ position: 'relative', mb: 8 }}>

      <Typography
        variant="h4"
        align="center"
        color="primary"
        m={8}
      >
        <Box textAlign="center">
          <EqualizerIcon color="primary" sx={{ fontSize: 80 }} />
        </Box>
        Le classement
      </Typography>
      <TableContainer component={Paper} elevation={6}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Rang</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Joueur.se</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.player}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:nth-child(odd)': { background: '#c5cef0' } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.player}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Ranking;
