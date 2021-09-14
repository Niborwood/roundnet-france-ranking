import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { DataGrid } from '@material-ui/data-grid';

function Ranking() {
  const columns = [
    { field: 'id', headerName: 'Rang', width: 70 },
    { field: 'player', headerName: 'Joueur', width: 130 },
    {
      field: 'points', headerName: 'Points', type: 'number', width: 130,
    },
  ];

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
    <Container id="ranking" maxWidth="sm" sx={{ position: 'relative' }}>
      <Typography
        variant="h4"
        align="center"
        color="primary"
        m={8}
      >
        Le classement
      </Typography>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Container>
  );
}

export default Ranking;
